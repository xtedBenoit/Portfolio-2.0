# Portfolio Professionnel - AMAÏZO Ekoué Teddy Junior

Portfolio professionnel bilingue (Français/Anglais) développé avec Next.js, présentant mes projets et compétences en développement web, mobile et backend.

## 🌟 Caractéristiques

- Design moderne et responsive
- Support multilingue (Français/Anglais)
- Intégration avec GitHub API pour les projets
- Formulaire de contact fonctionnel
- Animations fluides
- Mode sombre automatique
- Optimisé pour le SEO
- Performance optimisée

## 🛠 Technologies Utilisées

- **Frontend**:
  - Next.js 13
  - React 18
  - SASS/SCSS
  - Bootstrap 5
  - Font Awesome

- **Internationalisation**:
  - next-i18next

- **Email**:
  - Nodemailer

- **Animations**:
  - Typed.js
  - Intersection Observer API

## 📥 Installation

1. Cloner le repository :
```bash
git clone https://github.com/xtedbenoit/portfolio.git
cd portfolio
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Configurer les variables d'environnement :
```bash
cp .env.example .env.local
```
Modifier les valeurs dans `.env.local` avec vos propres configurations.

4. Lancer le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

5. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🚀 Déploiement

Le portfolio peut être déployé sur Vercel en quelques clics :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fxtedbenoit%2Fportfolio)

## 📝 Configuration

### Email

Pour configurer l'envoi d'emails, vous devez définir les variables suivantes dans votre fichier `.env.local` :

```env
EMAIL_USER=votre_email@gmail.com
EMAIL_PASS=votre_mot_de_passe_application
EMAIL_TO=email_destination@example.com
```

Pour Gmail, vous devez utiliser un "mot de passe d'application" généré dans les paramètres de sécurité de votre compte Google.

### Internationalisation

Les traductions sont stockées dans `/public/locales/{lang}/common.json`. Pour ajouter une nouvelle langue :

1. Créer un nouveau dossier dans `/public/locales/`
2. Copier le fichier `common.json` d'une langue existante
3. Traduire le contenu
4. Ajouter la langue dans `next-i18next.config.js`

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE.txt](LICENSE.txt) pour plus de détails.

## 📞 Contact

AMAÏZO Ekoué Teddy Junior - [@teddyamaizo](https://twitter.com/teddyamaizo)

Lien du projet : [https://github.com/xtedbenoit/portfolio](https://github.com/xtedbenoit/portfolio)