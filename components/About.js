import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const About = () => {
  const { t } = useTranslation('common');
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const details = t('about.details', { returnObjects: true });

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-title">
          <h2>{t('about.title')}</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 profile-img-container">
            <div className="profile-img-wrapper">
              <Image
                src="/images/about.jpg"
                alt="Teddy Amaïzo"
                width={400}
                height={500}
                className="img-fluid"
                priority
              />
              <div className="social-links">
                <a href="https://github.com/xtedbenoit" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/teddy-amaizo" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/teddyamaizo" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 content">
            <h3>{t('about.subtitle')}</h3>
            <p className="fst-italic">{t('about.description')}</p>

            <div className="row details-container">
              <div className="col-lg-6">
                <ul>
                  {details.slice(0, 4).map((detail, index) => (
                    <li key={index}>
                      <i className="fas fa-chevron-right"></i>
                      <strong>{detail.label}:</strong>
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {details.slice(4).map((detail, index) => (
                    <li key={index + 4}>
                      <i className="fas fa-chevron-right"></i>
                      <strong>{detail.label}:</strong>
                      <span>{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="skills-section">
              <h3>Compétences Techniques</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="skill-item">
                    <span className="skill-name">Frontend Development</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Backend Development</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <span className="skill-name">Mobile Development</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">DevOps & Cloud</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          padding: 80px 0;
          overflow: hidden;
        }

        .profile-img-container {
          position: relative;
          margin-bottom: 30px;
        }

        .profile-img-wrapper {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .social-links {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          text-align: center;
          background: rgba(255, 255, 255, 0.9);
          padding: 10px 0;
          transform: translateY(100%);
          transition: all 0.3s ease;
        }

        .profile-img-wrapper:hover .social-links {
          transform: translateY(0);
        }

        .social-links a {
          display: inline-block;
          width: 36px;
          height: 36px;
          background: var(--primary-color);
          color: var(--white);
          line-height: 36px;
          margin: 0 5px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: var(--secondary-color);
          transform: scale(1.1);
        }

        .content {
          padding: 30px;
          background: var(--white);
          border-radius: 15px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
        }

        .content h3 {
          font-weight: 700;
          font-size: 26px;
          color: var(--secondary-color);
          margin-bottom: 20px;
        }

        .content ul {
          list-style: none;
          padding: 0;
        }

        .content ul li {
          padding: 10px 0;
          display: flex;
          align-items: center;
        }

        .content ul i {
          font-size: 16px;
          margin-right: 5px;
          color: var(--primary-color);
          width: 30px;
        }

        .content ul strong {
          margin-right: 10px;
        }

        .skills-section {
          margin-top: 40px;
        }

        .skill-item {
          margin-bottom: 20px;
        }

        .skill-name {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
        }

        .progress {
          height: 10px;
          background: #e9ecef;
          border-radius: 5px;
          overflow: hidden;
        }

        .progress-bar {
          background: var(--primary-color);
          transition: width 1s ease;
        }

        /* Animation classes */
        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) {
          .content {
            margin-top: 30px;
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;