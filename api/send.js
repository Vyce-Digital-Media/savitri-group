import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    const data = await resend.emails.send({
      from: 'Savitri Group <onboarding@resend.dev>',
      to: 'kushmody0710@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 40px; color: #1e293b;">
          <h2 style="color: #1D4ED8; margin-bottom: 24px;">New Inquiry Received</h2>
          <p style="margin-bottom: 12px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 12px;"><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 24px; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
            <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #64748b;">This email was sent from the Savitri Group Contact Form.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
