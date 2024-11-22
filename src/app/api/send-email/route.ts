import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Validasi API key
if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY');
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Tambahkan config untuk mengizinkan method POST
export const config = {
  api: {
    bodyParser: true,
  },
};

// Definisikan method yang diizinkan
export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const { fullName, email_id, message } = await req.json();

    if (!fullName || !email_id || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
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

    return NextResponse.json(
      { success: true, data },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email' 
      },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
} 