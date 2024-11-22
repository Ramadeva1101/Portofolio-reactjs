import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';

const router = express.Router();
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

// Enable CORS
router.use(cors());
router.use(express.json());

router.post('/send-email', async (req, res) => {
  try {
    const { fullName, email_id, message } = req.body;

    // Validasi input
    if (!fullName || !email_id || !message) {
      return res.status(400).json({
        success: false,
        error: 'All fields are required'
      });
    }

    // Kirim email
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

    return res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email'
    });
  }
});

export default router; 