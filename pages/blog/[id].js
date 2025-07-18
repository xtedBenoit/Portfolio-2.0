import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const BlogPost = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const { id } = router.query;

  // Simulation de données d'article (à remplacer par une vraie API/base de données)
  const blogPosts = {
    1: {
      title: 'Innovation dans le développement mobile en Afrique',
      content: `
        <p>L'Afrique connaît une révolution numérique sans précédent, particulièrement dans le domaine du développement mobile. Cette transformation digitale est portée par une nouvelle génération de développeurs talentueux et innovants.</p>

        <h3>L'essor des applications mobiles en Afrique</h3>
        <p>Le continent africain compte aujourd'hui plus d'un milliard d'utilisateurs de téléphones mobiles, créant un marché dynamique pour les applications innovantes. Les développeurs africains répondent aux besoins locaux avec des solutions adaptées.</p>

        <h3>Technologies émergentes</h3>
        <p>L'adoption de frameworks modernes comme React Native et Flutter permet aux développeurs africains de créer des applications performantes et cross-platform. Ces outils facilitent le développement rapide et la maintenance des applications.</p>

        <h3>Impact social</h3>
        <p>Les applications mobiles développées en Afrique ont un impact significatif dans des domaines comme l'éducation, la santé et les services financiers. Elles contribuent à résoudre des problèmes locaux et à améliorer la vie quotidienne.</p>
      `,
      image: '/img/blog-1.jpg',
      date: '2023-08-15',
      author: 'Teddy Amaïzo',
      category: 'Mobile'
    },
    2: {
      title: 'L\'impact du Web3 sur le développement africain',
      content: `
        <p>Le Web3 représente une opportunité unique pour le développement économique et technologique en Afrique. Cette nouvelle iteration du web, basée sur la blockchain, ouvre des perspectives innovantes.</p>

        <h3>Blockchain et développement</h3>
        <p>La technologie blockchain permet de créer des solutions décentralisées qui répondent aux défis spécifiques du continent africain. Les smart contracts facilitent les transactions sécurisées et transparentes.</p>

        <h3>Opportunités pour les développeurs</h3>
        <p>Le Web3 crée de nouvelles opportunités professionnelles pour les développeurs africains. La demande croissante en expertise blockchain et smart contracts ouvre des perspectives intéressantes.</p>

        <h3>Cas d'usage concrets</h3>
        <p>De nombreux projets Web3 émergent en Afrique, notamment dans les domaines de la finance décentralisée (DeFi), des NFTs et de la traçabilité des produits.</p>
      `,
      image: '/img/blog-2.jpg',
      date: '2023-08-10',
      author: 'Teddy Amaïzo',
      category: 'Web3'
    },
    3: {
      title: 'Solutions Cloud pour startups africaines',
      content: `
        <p>Le cloud computing transforme la manière dont les startups africaines développent et déploient leurs solutions. Cette technologie offre flexibilité et scalabilité à moindre coût.</p>

        <h3>Avantages du Cloud</h3>
        <p>Les services cloud permettent aux startups africaines de réduire leurs coûts d'infrastructure tout en bénéficiant de solutions robustes et évolutives. La flexibilité du pay-as-you-go est particulièrement adaptée.</p>

        <h3>Meilleures pratiques</h3>
        <p>L'adoption du cloud nécessite une approche réfléchie. La sécurité, la conformité et l'optimisation des coûts sont des aspects cruciaux à considérer.</p>

        <h3>Perspectives d'avenir</h3>
        <p>Le marché du cloud en Afrique est en pleine croissance. Les fournisseurs de services cloud investissent dans des infrastructures locales pour améliorer les performances.</p>
      `,
      image: '/img/blog-3.jpg',
      date: '2023-08-05',
      author: 'Teddy Amaïzo',
      category: 'Cloud'
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return <div>Article non trouvé</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} | Teddy Amaïzo Blog</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>

      <div className="blog-post-page">
        <div className="container">
          <div className="blog-navigation">
            <Link href="/#blog" className="back-link">
              <i className="fas fa-arrow-left"></i> Retour aux articles
            </Link>
          </div>

          <article className="blog-post-content">
            <div className="post-header">
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                <span className="post-author">{post.author}</span>
              </div>
              <h1 className="post-title">{post.title}</h1>
            </div>

            <div className="post-image">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="img-fluid"
                priority
              />
            </div>

            <div className="post-body"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="post-footer">
              <div className="share-buttons">
                <span>Partager :</span>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <style jsx>{`
        .blog-post-page {
          padding: 100px 0;
          background: var(--section-bg);
        }

        .blog-navigation {
          margin-bottom: 30px;
        }

        .back-link {
          color: var(--primary-color);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: gap 0.3s ease;
        }

        .back-link:hover {
          gap: 15px;
        }

        .blog-post-content {
          background: var(--white);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
        }

        .post-header {
          margin-bottom: 30px;
        }

        .post-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 15px;
          color: var(--light-text-color);
          font-size: 14px;
        }

        .post-category {
          background: rgba(5, 99, 187, 0.1);
          color: var(--primary-color);
          padding: 5px 15px;
          border-radius: 50px;
        }

        .post-title {
          font-size: 36px;
          color: var(--secondary-color);
          margin-bottom: 20px;
        }

        .post-image {
          margin-bottom: 30px;
          border-radius: 10px;
          overflow: hidden;
        }

        .post-body {
          font-size: 18px;
          line-height: 1.8;
          color: var(--text-color);
        }

        .post-body h3 {
          font-size: 24px;
          color: var(--secondary-color);
          margin: 30px 0 15px;
        }

        .post-body p {
          margin-bottom: 20px;
        }

        .post-footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid var(--border-color);
        }

        .share-buttons {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .share-buttons a {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-color);
          color: var(--white);
          border-radius: 50%;
          transition: transform 0.3s ease;
        }

        .share-buttons a:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .blog-post-page {
            padding: 60px 0;
          }

          .blog-post-content {
            padding: 20px;
          }

          .post-title {
            font-size: 28px;
          }

          .post-body {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } }
    ],
    fallback: false
  };
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default BlogPost;