import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  const { name, email, projectType, question, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: 'cozyavenu@gmail.com',
      to: 'cozyavenu@gmail.com',
      subject: 'Nuevo mensaje de contacto',
      text: `
        Nombre: ${name}
        Email: ${email}
        Tipo de proyecto: ${projectType}
        Pregunta: ${question}
        Mensaje: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).json({ message: 'Error al enviar el correo electrónico',});
  }
}

// NT: Para obtener el SMTP_PASS
// Habilita la autenticación de dos factores (2FA) en gmail,
// luego genera una contraseña de aplicación:
// -Dirigete a la configuracion en tu cuenta de Google.
// -Seccion Seguridad. 
// -Verificacion de dos pasos. Contraseña de aplicaciones (al final de la pag.)
// -Elige "Otra (nombre personalizado)" establece el nombre y haz clic en "Generar"
// Copiala en el .env