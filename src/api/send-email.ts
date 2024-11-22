import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';

const router = express.Router();
const resend = new Resend('re_hrdaagTx_3V8BqV2BSRCraCFvXnZJp3XW');

router.use(cors({
  origin: 'http://localhost:5174'
}));

router.post('/send', async (req, res) => {
  try {
    const { fullName, email_id, message } = req.body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
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

    res.json({ success: true, data });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    });
  }
});

export default router; 