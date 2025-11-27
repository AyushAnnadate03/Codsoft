const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

async function sendAppEmails(candidateEmail, employerEmail, jobTitle) {
  await transporter.sendMail({
    from: '"Job Board" <no-reply@jobboard.com>',
    to: candidateEmail,
    subject: `Application received for ${jobTitle}`,
    text: `Thanks for applying to ${jobTitle}. We'll notify you about updates.`
  });
  await transporter.sendMail({
    from: '"Job Board" <no-reply@jobboard.com>',
    to: employerEmail,
    subject: `New application for ${jobTitle}`,
    text: `You have a new application for ${jobTitle}. Check your employer dashboard.`
  });
}
