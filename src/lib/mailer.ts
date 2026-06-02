import nodemailer from "nodemailer";

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
}): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL — required for port 465
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // App Password, not account password
    },
  });

  const from = `Marrow Library <${process.env.GMAIL_USER}>`;

  // CRITICAL: fully await before returning — Vercel terminates the function
  // the moment a response is sent, so fire-and-forget will drop the email.
  await transporter.sendMail({ from, ...opts });
}
