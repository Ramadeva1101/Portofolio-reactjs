import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fullName, email_id, message } = req.body;

    if (!fullName || !email_id || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ramdevganteng77@gmail.com'],
      subject: `New message from ${fullName}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email_id}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    });
  }
} 