import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const HireMe = () => {
  const { t } = useTranslation('common');

  return (
    <section className="hire-me-section">
      <div className="container">
        <div className="hire-me-content">
          <h2>{t('hire_me_title')}</h2>
          <p>{t('hire_me_description')}</p>
          
          <div className="cta-buttons">
            <Link href="/#contact" className="hire-me-btn primary">
              <i className="fas fa-paper-plane"></i>
              {t('contact_me')}
            </Link>
            
            <Link href="/#portfolio" className="hire-me-btn secondary">
              <i className="fas fa-eye"></i>
              {t('view_work')}
            </Link>
          </div>

          <div className="expertise-list">
            <div className="expertise-item">
              <i className="fas fa-mobile-alt"></i>
              <h3>{t('mobile_dev')}</h3>
              <p>{t('mobile_dev_desc')}</p>
            </div>

            <div className="expertise-item">
              <i className="fas fa-laptop-code"></i>
              <h3>{t('web_dev')}</h3>
              <p>{t('web_dev_desc')}</p>
            </div>

            <div className="expertise-item">
              <i className="fas fa-server"></i>
              <h3>{t('backend_dev')}</h3>
              <p>{t('backend_dev_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hire-me-section {
          padding: 100px 0;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
          color: var(--white);
          text-align: center;
        }

        .hire-me-content {
          max-width: 800px;
          margin: 0 auto;
        }

        h2 {
          font-size: 36px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        p {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 60px;
        }

        .hire-me-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .hire-me-btn.primary {
          background: var(--white);
          color: var(--primary-color);
        }

        .hire-me-btn.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          border: 2px solid var(--white);
        }

        .hire-me-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .expertise-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .expertise-item {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px;
          transition: transform 0.3s ease;
        }

        .expertise-item:hover {
          transform: translateY(-5px);
        }

        .expertise-item i {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .expertise-item h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .expertise-item p {
          font-size: 16px;
          margin-bottom: 0;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hire-me-section {
            padding: 60px 0;
          }

          h2 {
            font-size: 28px;
          }

          p {
            font-size: 16px;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 15px;
          }

          .hire-me-btn {
            width: 100%;
            justify-content: center;
          }

          .expertise-list {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default HireMe;