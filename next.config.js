const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  sassOptions: {
    includePaths: ['./scss'],
  },
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  webpack: (config, { isServer }) => {
    // Ajout du support pour les fichiers SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  // Configuration des en-têtes de sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  // Configuration du comportement de redirection
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // Optimisation des performances
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}