import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Typed from 'typed.js';
import ContactForm from '../components/ContactForm';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  const { t } = useTranslation('common');

  useEffect(() => {
    const options = {
      strings: [
        t('hero.typed.1'),
        t('hero.typed.2'),
        t('hero.typed.3')
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };

    const typed = new Typed('#typed-text', options);

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <div>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            AMAÏZO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">{t('nav.about')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">{t('nav.services')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">{t('nav.portfolio')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">{t('nav.contact')}</a>
              </li>
              <li className="nav-item">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1>{t('hero.title')}</h1>
              <h2><span id="typed-text"></span></h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#contact" className="btn-get-started scrollto">
                  {t('hero.cta')}
                </a>
              </div>
            </div>
            <div className="col-lg-6 hero-img">
              <div className="profile-image-container">
                <Image
                  src="/images/profile.jpg"
                  alt="Teddy Amaïzo"
                  width={400}
                  height={400}
                  className="img-fluid rounded-circle"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>{t('about.title')}</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <Image
                  src="/images/about.jpg"
                  alt="About"
                  width={300}
                  height={400}
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content">
                <h3>{t('about.subtitle')}</h3>
                <p className="fst-italic">{t('about.description')}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      {t('about.details', { returnObjects: true }).slice(0, 4).map((detail, index) => (
                        <li key={index}>
                          <i className="bi bi-chevron-right"></i>
                          <strong>{detail.label}:</strong> <span>{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      {t('about.details', { returnObjects: true }).slice(4).map((detail, index) => (
                        <li key={index + 4}>
                          <i className="bi bi-chevron-right"></i>
                          <strong>{detail.label}:</strong> <span>{detail.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>{t('contact.title')}</h2>
              <p>{t('contact.description')}</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                © {new Date().getFullYear()} {t('footer.copyright')}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          padding: 1rem;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
        }

        #hero {
          width: 100%;
          height: 100vh;
          background: #f5f8fd;
          padding-top: 82px;
        }

        .profile-image-container {
          position: relative;
          width: 400px;
          height: 400px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 991px) {
          .profile-image-container {
            width: 300px;
            height: 300px;
            margin-top: 2rem;
          }
        }

        .section-title {
          text-align: center;
          padding-bottom: 30px;
        }

        .section-title h2 {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 20px;
          padding-bottom: 20px;
          position: relative;
        }

        .section-title h2::after {
          content: '';
          position: absolute;
          display: block;
          width: 50px;
          height: 3px;
          background: #0563bb;
          bottom: 0;
          left: calc(50% - 25px);
        }

        .btn-get-started {
          font-family: "Poppins", sans-serif;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 16px;
          letter-spacing: 1px;
          display: inline-block;
          padding: 10px 28px;
          border-radius: 50px;
          transition: 0.5s;
          color: #fff;
          background: #0563bb;
          text-decoration: none;
        }

        .btn-get-started:hover {
          background: #0678e3;
        }

        .footer {
          padding: 20px 0;
          background: #f9f9f9;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}