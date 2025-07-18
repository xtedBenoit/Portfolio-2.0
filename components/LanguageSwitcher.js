import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const changeLanguage = (newLocale) => {
    const path = asPath;
    router.push({ pathname, query }, path, { locale: newLocale });
  };

  return (
    <div className="language-switcher">
      <select
        value={currentLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="lang-select"
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
          </option>
        ))}
      </select>

      <style jsx>{`
        .language-switcher {
          position: relative;
          margin-left: 15px;
        }

        .lang-select {
          padding: 5px 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          background-color: white;
          cursor: pointer;
          font-size: 14px;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url('data:image/svg+xml;utf8,<svg fill="black" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
          background-repeat: no-repeat;
          background-position: right 5px center;
          padding-right: 30px;
        }

        .lang-select:hover {
          border-color: #999;
        }

        .lang-select:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 0 2px rgba(0,112,243,0.2);
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;