import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Blog = () => {
  const { t } = useTranslation('common');

  const blogPosts = [
    {
      id: 1,
      title: 'Innovation dans le développement mobile en Afrique',
      excerpt: 'L\'Afrique connaît une révolution numérique sans précédent, particulièrement dans le domaine du développement mobile. Cette transformation digitale est portée par une nouvelle génération de développeurs talentueux et innovants.',
      image: '/img/blog-1.jpg',
      date: '2023-08-15',
      author: 'Teddy Amaïzo',
      category: 'Mobile'
    },
    {
      id: 2,
      title: 'L\'impact du Web3 sur le développement africain',
      excerpt: 'Le Web3 représente une opportunité unique pour le développement économique et technologique en Afrique. Cette nouvelle iteration du web, basée sur la blockchain, ouvre des perspectives innovantes.',
      image: '/img/blog-2.jpg',
      date: '2023-08-10',
      author: 'Teddy Amaïzo',
      category: 'Web3'
    },
    {
      id: 3,
      title: 'Solutions Cloud pour startups africaines',
      excerpt: 'Le cloud computing transforme la manière dont les startups africaines développent et déploient leurs solutions. Cette technologie offre flexibilité et scalabilité à moindre coût.',
      image: '/img/blog-3.jpg',
      date: '2023-08-05',
      author: 'Teddy Amaïzo',
      category: 'Cloud'
    }
  ];

  return (
    <>
      <Head>
        <title>Blog | Teddy Amaïzo</title>
        <meta name="description" content="Découvrez mes articles sur le développement web, mobile et les technologies émergentes en Afrique." />
      </Head>

      <div className="blog-page">
        <div className="container">
          <div className="section-title">
            <h2>Blog</h2>
            <p>Découvrez mes derniers articles sur le développement et la technologie</p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <Link href={`/blog/${post.id}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="img-fluid"
                    />
                    <div className="category-badge">{post.category}</div>
                  </div>
                  
                  <div className="blog-card-content">
                    <div className="post-meta">
                      <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                      <span className="post-author">{post.author}</span>
                    </div>
                    
                    <h3 className="post-title">{post.title}</h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    
                    <div className="read-more">
                      Lire la suite <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-page {
          padding: 100px 0;
          background: var(--section-bg);
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title h2 {
          color: var(--secondary-color);
          font-size: 36px;
          margin-bottom: 15px;
        }

        .section-title p {
          color: var(--text-color);
          font-size: 18px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .blog-card {
          background: var(--white);
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1);
        }

        .blog-card-link {
          text-decoration: none;
          color: inherit;
        }

        .blog-card-image {
          position: relative;
        }

        .category-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(5, 99, 187, 0.9);
          color: var(--white);
          padding: 5px 15px;
          border-radius: 50px;
          font-size: 14px;
        }

        .blog-card-content {
          padding: 25px;
        }

        .post-meta {
          display: flex;
          gap: 20px;
          color: var(--light-text-color);
          font-size: 14px;
          margin-bottom: 15px;
        }

        .post-title {
          color: var(--secondary-color);
          font-size: 22px;
          margin-bottom: 15px;
          line-height: 1.4;
        }

        .post-excerpt {
          color: var(--text-color);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 20px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more {
          color: var(--primary-color);
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .read-more i {
          transition: transform 0.3s ease;
        }

        .blog-card:hover .read-more i {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .blog-page {
            padding: 60px 0;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .section-title h2 {
            font-size: 28px;
          }

          .section-title p {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Blog;