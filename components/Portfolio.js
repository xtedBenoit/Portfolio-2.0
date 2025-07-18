import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Portfolio = () => {
  const { t } = useTranslation('common');
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from GitHub API
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/xtedbenoit/repos');
        const data = await response.json();
        
        const enhancedProjects = data.map(project => ({
          id: project.id,
          name: project.name,
          description: project.description,
          url: project.html_url,
          homepage: project.homepage,
          topics: project.topics || [],
          language: project.language,
          category: determineCategory(project.topics, project.language)
        }));

        setProjects(enhancedProjects);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const determineCategory = (topics, language) => {
    const topicsLower = topics.map(t => t.toLowerCase());
    if (topicsLower.includes('web') || language === 'JavaScript' || language === 'TypeScript') return 'web';
    if (topicsLower.includes('mobile') || language === 'Kotlin' || language === 'Swift') return 'mobile';
    if (topicsLower.includes('backend') || language === 'Java' || language === 'Python') return 'backend';
    return 'other';
  };

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.description')}</p>
        </div>

        <div className="row mb-5">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="portfolio-filters">
              {Object.entries(t('portfolio.categories', { returnObjects: true })).map(([key, value]) => (
                <li key={key}>
                  <button
                    className={`filter-btn ${filter === key ? 'active' : ''}`}
                    onClick={() => setFilter(key)}
                  >
                    {value}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row portfolio-container">
            {filteredProjects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                  <Image
                    src={`https://raw.githubusercontent.com/xtedbenoit/${project.name}/main/preview.png`}
                    alt={project.name}
                    width={400}
                    height={300}
                    className="img-fluid"
                    onError={(e) => {
                      e.target.src = '/images/portfolio-placeholder.jpg';
                    }}
                  />
                  <div className="portfolio-info">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <div className="portfolio-links">
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                        >
                          <i className="fas fa-link"></i>
                        </a>
                      )}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Source Code"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .portfolio {
          padding: 80px 0;
        }

        .portfolio-filters {
          padding: 0;
          margin: 0 0 35px 0;
          list-style: none;
          text-align: center;
        }

        .portfolio-filters li {
          display: inline-block;
          margin: 0 4px 10px 4px;
        }

        .filter-btn {
          padding: 8px 20px;
          font-size: 14px;
          font-weight: 500;
          color: var(--secondary-color);
          background: transparent;
          border: 2px solid var(--primary-color);
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary-color);
          color: var(--white);
        }

        .portfolio-item {
          margin-bottom: 30px;
        }

        .portfolio-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .portfolio-wrap:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
        }

        .portfolio-info {
          position: absolute;
          bottom: -100%;
          left: 0;
          right: 0;
          text-align: center;
          padding: 20px;
          background: rgba(255, 255, 255, 0.9);
          transition: all 0.3s ease;
        }

        .portfolio-wrap:hover .portfolio-info {
          bottom: 0;
        }

        .portfolio-info h4 {
          font-size: 18px;
          font-weight: 600;
          color: var(--secondary-color);
          margin-bottom: 10px;
        }

        .portfolio-info p {
          font-size: 14px;
          color: var(--light-text-color);
          margin: 0;
        }

        .portfolio-links {
          margin-top: 10px;
        }

        .portfolio-links a {
          display: inline-block;
          width: 35px;
          height: 35px;
          line-height: 35px;
          background: var(--primary-color);
          color: var(--white);
          border-radius: 50%;
          margin: 0 5px;
          transition: all 0.3s ease;
        }

        .portfolio-links a:hover {
          background: var(--secondary-color);
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .portfolio-filters li {
            margin: 0 2px 8px 2px;
          }

          .filter-btn {
            padding: 6px 15px;
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;