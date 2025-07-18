const nodemailer = require('nodemailer');

const emailService = {
  transporter: nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  }),

  sendContactEmail: async (name, email, message) => {
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECIPIENT,
        subject: `Nouveau message de ${name} via le portfolio`,
        html: `
          <h3>Nouveau message de contact</h3>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      };

      const info = await emailService.transporter.sendMail(mailOptions);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Erreur d\'envoi d\'email:', error);
      return { success: false, error: error.message };
    }
  }
};

module.exports = emailService;