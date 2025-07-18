import emailService from '../../utils/emailService';

export default async function handler(req, res) {
  // Vérifier la méthode HTTP
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validation basique
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Tous les champs sont requis'
      });
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Format d\'email invalide'
      });
    }

    // Envoyer l'email
    const result = await emailService.sendContactEmail(name, email, message);

    if (!result.success) {
      throw new Error(result.error);
    }

    // Réponse réussie
    return res.status(200).json({
      message: 'Message envoyé avec succès',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return res.status(500).json({
      message: 'Une erreur est survenue lors de l\'envoi du message'
    });
  }
}