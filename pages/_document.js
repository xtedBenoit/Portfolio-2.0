import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Préchargement des polices */}
          <link
            rel="preload"
            href="/fonts/Poppins-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/OpenSans-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          {/* Meta tags pour SEO */}
          <meta charSet="utf-8" />
          <meta name="author" content="AMAÏZO Ekoué Teddy Junior" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Portfolio - AMAÏZO Teddy" />
          <meta property="og:image" content="/images/og-image.jpg" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@teddyamaizo" />

          {/* Préconnexion aux origines externes */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />

          {/* Styles critiques inlinés */}
          <style dangerouslySetInnerHTML={{ __html: `
            /* Styles pour éviter le FOUC */
            body { opacity: 0; }
            .js body { opacity: 1; transition: opacity 0.3s; }
          `}} />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Script pour éviter le FOUC */}
          <script dangerouslySetInnerHTML={{ __html: `
            document.documentElement.classList.add('js');
          `}} />
        </body>
      </Html>
    );
  }
}

export default MyDocument;