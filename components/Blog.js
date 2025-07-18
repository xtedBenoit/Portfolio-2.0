import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  const { t } = useTranslation('common');

  const blogPosts = [
    {
      id: 1,
      title: 'Innovation dans le développement mobile en Afrique',
      excerpt: 'Découvrez les dernières tendances et innovations dans le développement mobile en Afrique...',
      image: '/img/blog-1.jpg',
      date: '2023-08-15',
      category: 'Mobile'
    },
    {
      id: 2,
      title: 'L\'impact du Web3 sur le développement africain',
      excerpt: 'Analyse de l\'influence des technologies blockchain et Web3 sur le développement en Afrique...',
      image: '/img/blog-2.jpg',
      date: '2023-08-10',
      category: 'Web3'
    },
    {
      id: 3,
      title: 'Solutions Cloud pour startups africaines',
      excerpt: 'Guide pratique pour l\'utilisation des services cloud par les startups africaines...',
      image: '/img/blog-3.jpg',
      date: '2023-08-05',
      category: 'Cloud'
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-title">
          <h2>{t('blog.title')}</h2>
          <p>{t('blog.description')}</p>
        </div>

        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 mb-4">
              <article className="blog-post">
                <div className="post-img">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="img-fluid"
                  />
                  <div className="post-date">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="post-content">
                  <div className="post-category">{post.category}</div>
                  <h3 className="post-title">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="read-more">
                    {t('blog.read_more')} <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog {
          padding: 80px 0;
          background: var(--section-bg);
        }

        .blog-post {
          background: var(--white);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease;
        }

        .blog-post:hover {
          transform: translateY(-10px);
        }

        .post-img {
          position: relative;
          overflow: hidden;
        }

        .post-img img {
          transition: transform 0.3s ease;
        }

        .blog-post:hover .post-img img {
          transform: scale(1.1);
        }

        .post-date {
          position: absolute;
          top: 20px;
          right: 20px;
          background: var(--primary-color);
          color: var(--white);
          padding: 8px 15px;
          border-radius: 50px;
          font-size: 14px;
        }

        .post-content {
          padding: 25px;
        }

        .post-category {
          display: inline-block;
          background: rgba(5, 99, 187, 0.1);
          color: var(--primary-color);
          padding: 5px 15px;
          border-radius: 50px;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .post-title {
          font-size: 20px;
          margin-bottom: 15px;
        }

        .post-title a {
          color: var(--secondary-color);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .post-title a:hover {
          color: var(--primary-color);
        }

        .post-excerpt {
          color: var(--light-text-color);
          margin-bottom: 20px;
          font-size: 15px;
          line-height: 1.6;
        }

        .read-more {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          transition: gap 0.3s ease;
        }

        .read-more:hover {
          gap: 10px;
        }

        @media (max-width: 768px) {
          .post-title {
            font-size: 18px;
          }

          .post-excerpt {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;