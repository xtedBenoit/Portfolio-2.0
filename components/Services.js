import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';

const Services = () => {
  const { t } = useTranslation('common');
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const serviceItems = servicesRef.current.querySelectorAll('.service-item');
    serviceItems.forEach((item) => observer.observe(item));

    return () => {
      serviceItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const services = t('services.items', { returnObjects: true });

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="container">
        <div className="section-title">
          <h2>{t('services.title')}</h2>
          <p>{t('services.description')}</p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="service-item">
                <div className="icon">
                  {index === 0 && <i className="fas fa-code"></i>}
                  {index === 1 && <i className="fas fa-mobile-alt"></i>}
                  {index === 2 && <i className="fas fa-server"></i>}
                  {index === 3 && <i className="fas fa-network-wired"></i>}
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          padding: 80px 0;
          background: var(--section-bg);
        }

        .service-item {
          text-align: center;
          padding: 30px;
          border-radius: 10px;
          background: var(--white);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(20px);
        }

        .service-item.animate-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .service-item .icon {
          margin-bottom: 20px;
        }

        .service-item .icon i {
          font-size: 40px;
          color: var(--primary-color);
          transition: all 0.3s ease;
        }

        .service-item:hover .icon i {
          transform: scale(1.1);
        }

        .service-item h4 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--secondary-color);
        }

        .service-item p {
          font-size: 15px;
          color: var(--light-text-color);
          margin-bottom: 0;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .service-item {
            padding: 20px;
          }

          .service-item .icon i {
            font-size: 32px;
          }

          .service-item h4 {
            font-size: 18px;
          }

          .service-item p {
            font-size: 14px;
          }
        }

        /* Animation delay for each service item */
        .service-item:nth-child(1) { transition-delay: 0.1s; }
        .service-item:nth-child(2) { transition-delay: 0.2s; }
        .service-item:nth-child(3) { transition-delay: 0.3s; }
        .service-item:nth-child(4) { transition-delay: 0.4s; }
      `}</style>
    </section>
  );
};

export default Services;