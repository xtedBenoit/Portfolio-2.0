import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

const Hero = () => {
  const { t } = useTranslation('common');
  const typedRef = useRef(null);

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

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [t]);

  return (
    <section id="hero" className="hero">
      <div className="hero-particles"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 hero-content">
            <h1 className="animate-in">{t('hero.title')}</h1>
            <h2 className="animate-in">
              <span ref={typedRef}></span>
            </h2>
            <div className="hero-btns animate-in">
              <a href="#contact" className="btn-primary">
                {t('hero.cta')}
              </a>
              <a href="#portfolio" className="btn-secondary">
                {t('portfolio.title')}
              </a>
            </div>
          </div>
          <div className="col-lg-6 hero-img animate-in">
            <div className="profile-container">
              <Image
                src="/images/profile.jpg"
                alt="Teddy Amaïzo"
                width={400}
                height={400}
                className="profile-img"
                priority
              />
              <div className="profile-shape"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          padding-top: 82px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--background-color) 0%, #e6f0ff 100%);
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, #b3d4ff 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.3;
        }

        .hero-content {
          padding: 0 20px;
        }

        .hero h1 {
          font-size: 48px;
          font-weight: 700;
          color: var(--secondary-color);
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
        }

        .hero h2 {
          font-size: 24px;
          color: var(--primary-color);
          margin-bottom: 30px;
          opacity: 0;
          transform: translateY(20px);
        }

        .hero-btns {
          opacity: 0;
          transform: translateY(20px);
        }

        .btn-primary,
        .btn-secondary {
          display: inline-block;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-right: 15px;
          margin-bottom: 10px;
        }

        .btn-primary {
          background: var(--primary-color);
          color: var(--white);
          border: 2px solid var(--primary-color);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .btn-primary:hover {
          background: transparent;
          color: var(--primary-color);
        }

        .btn-secondary:hover {
          background: var(--primary-color);
          color: var(--white);
        }

        .profile-container {
          position: relative;
          width: 400px;
          height: 400px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
        }

        .profile-img {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: all 0.5s ease;
        }

        .profile-shape {
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 3px solid var(--primary-color);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morphing 10s ease-in-out infinite;
        }

        .profile-container:hover .profile-img {
          filter: grayscale(0%);
          transform: scale(1.02);
        }

        /* Animations */
        .animate-in {
          animation: fadeInUp 0.6s ease forwards;
        }

        .hero h1.animate-in { animation-delay: 0.2s; }
        .hero h2.animate-in { animation-delay: 0.4s; }
        .hero-btns.animate-in { animation-delay: 0.6s; }
        .hero-img.animate-in { animation-delay: 0.8s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes morphing {
          0% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
          100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
        }

        @media (max-width: 991px) {
          .hero {
            height: auto;
            padding: 120px 0 60px;
          }

          .hero-content {
            text-align: center;
            margin-bottom: 40px;
          }

          .hero h1 {
            font-size: 36px;
          }

          .hero h2 {
            font-size: 20px;
          }

          .profile-container {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;