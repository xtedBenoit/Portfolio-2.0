import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          AMAÏZO
        </a>
        <button
          className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services" onClick={() => setIsMenuOpen(false)}>
                {t('nav.services')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" onClick={() => setIsMenuOpen(false)}>
                {t('nav.portfolio')}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </a>
            </li>
            <li className="nav-item">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          transition: all 0.3s ease-in-out;
          background: transparent;
        }

        .navbar-scrolled {
          background: var(--white);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .navbar-brand {
          font-family: 'Poppins', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .nav-link {
          font-size: 1rem;
          font-weight: 500;
          color: var(--secondary-color);
          padding: 0.5rem 1rem;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-color);
        }

        .navbar-toggler {
          border: none;
          padding: 0.25rem;
        }

        .navbar-toggler:focus {
          box-shadow: none;
          outline: none;
        }

        .navbar-toggler-icon {
          width: 1.5em;
          height: 1.5em;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: var(--white);
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 0.5rem;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          }

          .nav-item {
            text-align: center;
          }

          .nav-link {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;