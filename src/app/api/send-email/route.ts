import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Validasi API key
if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Log untuk debugging
    console.log('API route called');

    const body = await request.json();
    console.log('Request body:', body);

    const { fullName, email_id, message } = body;

    if (!fullName || !email_id || !message) {
      return new NextResponse(
        JSON.stringify({ error: 'All fields are required' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const sendResult = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ramdevganteng77@gmail.com'],
      subject: `New message from ${fullName}`,
      reply_to: email_id,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email_id}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    console.log('Email sent:', sendResult);

    return new NextResponse(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        data: sendResult 
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('API route error:', error);
    
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send email' 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 