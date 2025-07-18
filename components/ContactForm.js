import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const ContactForm = () => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Une erreur est survenue');

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Afficher un message de succès temporaire
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  return (
    <div className="contact-form-container">
      {status.error && (
        <div className="alert alert-danger" role="alert">
          {status.error}
        </div>
      )}

      {status.submitted && (
        <div className="alert alert-success" role="alert">
          {t('contact.success_message')}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t('contact.name')}</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status.submitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t('contact.email')}</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status.submitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t('contact.message')}</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={status.submitting}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={status.submitting}
        >
          {status.submitting ? t('contact.sending') : t('contact.send')}
        </button>
      </form>

      <style jsx>{`
        .contact-form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          transition: border-color 0.2s;
        }

        .form-control:focus {
          border-color: #0070f3;
          outline: none;
          box-shadow: 0 0 0 2px rgba(0,112,243,0.2);
        }

        .alert {
          padding: 1rem;
          margin-bottom: 1rem;
          border-radius: 4px;
        }

        .alert-success {
          background-color: #d4edda;
          border-color: #c3e6cb;
          color: #155724;
        }

        .alert-danger {
          background-color: #f8d7da;
          border-color: #f5c6cb;
          color: #721c24;
        }

        button {
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
        }

        button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;