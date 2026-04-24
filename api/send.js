import { Resend } from 'resend';

export default async function handler(req, res) {
  // 1. Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Check for API Key
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('SERVER ERROR: RESEND_API_KEY is not defined in environment variables.');
    return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = req.body;

    // 3. Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

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

    if (data.error) {
      console.error('RESEND ERROR:', data.error);
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({ success: true, id: data.data.id });
  } catch (error) {
    console.error('UNEXPECTED SERVER ERROR:', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
