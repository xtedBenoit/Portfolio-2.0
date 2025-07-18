import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Styles globaux
import '../styles/globals.scss';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import dynamique de Bootstrap JS
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0563bb" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script strategy="lazyOnload" id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <Component {...pageProps} />

      {/* Scripts pour les animations fluides */}
      <Script
        strategy="afterInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.min.js"
      />
      <Script
        strategy="afterInteractive"
        id="init-smooth-scroll"
      >
        {`
          document.addEventListener('DOMContentLoaded', function() {
            var scroll = new SmoothScroll('a[href*="#"]', {
              speed: 800,
              speedAsDuration: true,
              offset: 80
            });
          });
        `}
      </Script>
    </>
  );
}

export default appWithTranslation(MyApp);