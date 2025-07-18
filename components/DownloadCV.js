import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const DownloadCV = () => {
  const { t } = useTranslation('common');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Chemin vers le CV (à ajuster selon l'emplacement réel du fichier)
      const cvPath = '/cv/CV_Teddy_Amaizo.pdf';
      
      // Créer un lien temporaire pour le téléchargement
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'CV_Teddy_Amaizo.pdf';
      
      // Déclencher le téléchargement
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Ajouter un petit délai pour l'animation
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
      
    } catch (error) {
      console.error('Erreur lors du téléchargement du CV:', error);
      setIsDownloading(false);
    }
  };

  return (
    <button
      className={`download-cv-btn ${isDownloading ? 'downloading' : ''}`}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <i className={`fas ${isDownloading ? 'fa-circle-notch fa-spin' : 'fa-download'}`}></i>
      {isDownloading ? t('downloading') : t('download_cv')}
      
      <style jsx>{`
        .download-cv-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary-color);
          color: var(--white);
          border: none;
          padding: 12px 25px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .download-cv-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(5, 99, 187, 0.3);
        }

        .download-cv-btn.downloading {
          background: var(--primary-color-dark);
          cursor: not-allowed;
        }

        .download-cv-btn i {
          font-size: 18px;
        }

        @media (max-width: 768px) {
          .download-cv-btn {
            padding: 10px 20px;
            font-size: 14px;
          }
        }
      `}</style>
    </button>
  );
};

export default DownloadCV;