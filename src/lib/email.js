import nodemailer from 'nodemailer';
import { Resend } from 'resend';

const emailProvider = process.env.EMAIL_PROVIDER || 'nodemailer';

// Nodemailer configuration
const createNodemailerTransport = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Resend configuration
const resend = emailProvider === 'resend' ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendWaitlistEmail(to, name) {
  const subject = 'Welcome to the IVMA Waitlist! 🎉';
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
               
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="color: #111827; font-size: 24px; font-weight: 600; margin: 0 0 16px;">
                      Hey ${name}! 👋
                    </h2>
                    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
                      Thanks for joining the IVMA waitlist! You're now part of an exclusive group who will be the first to experience inventory management that actually makes sense.
                    </p>
                    
                    <div style="background-color: #f3f4f6; border-radius: 12px; padding: 24px; margin: 24px 0;">
                      <h3 style="color: #111827; font-size: 18px; font-weight: 600; margin: 0 0 16px;">
                        What's Coming:
                      </h3>
                      <ul style="color: #4b5563; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                        <li>Real-time inventory tracking (no more spreadsheets!)</li>
                        <li>Free website with your inventory synced</li>
                        <li>WhatsApp checkout for your customers</li>
                        <li>Weekly AI reports with smart insights</li>
                        <li>And a whole lot more...</li>
                      </ul>
                    </div>
                    
                    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 24px 0;">
                      We're putting the finishing touches on IVMA and can't wait to show you what we've built. You'll be among the first to know when we launch.
                    </p>
                    
                    <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0;">
                      Stay tuned!<br>
                      <strong>The IVMA Team</strong>
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 32px 40px; border-top: 1px solid #e5e7eb;">
                    <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0 0 8px; text-align: center;">
                      You're receiving this because you joined the IVMA waitlist.
                    </p>
                    <p style="color: #6b7280; font-size: 12px; margin: 0; text-align: center;">
                      © ${new Date().getFullYear()} IVMA. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  const textContent = `
Hey ${name}!

Thanks for joining the IVMA waitlist! You're now part of an exclusive group who will be the first to experience inventory management that actually makes sense.

What's Coming:
- Real-time inventory tracking (no more spreadsheets!)
- Free website with your inventory synced
- WhatsApp checkout for your customers
- Weekly AI reports with smart insights
- And a whole lot more...

We're putting the finishing touches on IVMA and can't wait to show you what we've built. You'll be among the first to know when we launch.

Stay tuned!
The IVMA Team

---
You're receiving this because you joined the IVMA waitlist.
© ${new Date().getFullYear()} IVMA. All rights reserved.
  `.trim();

  try {
    console.log(`Sending email using: ${emailProvider}`);

    if (emailProvider === 'resend' && resend) {
      // Use Resend
      const { data, error } = await resend.emails.send({
        from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
        to: [to],
        subject: subject,
        html: htmlContent,
        text: textContent,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log('Email sent via Resend:', data?.id);
      return { success: true, messageId: data?.id, provider: 'resend' };
    } else {
      // Use Nodemailer (default)
      const transporter = createNodemailerTransport();
      
      const info = await transporter.sendMail({
        from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
        to: to,
        subject: subject,
        text: textContent,
        html: htmlContent,
      });

      console.log('Email sent via Nodemailer:', info.messageId);
      return { success: true, messageId: info.messageId, provider: 'nodemailer' };
    }
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
