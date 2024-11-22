import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const isDevelopment = process.env.NODE_ENV === 'development';

export async function POST(request: Request) {
  try {
    const { fullName, email_id, message } = await request.json();

    if (!fullName || !email_id || !message) {
      return NextResponse.json({ 
        error: 'Semua field harus diisi' 
      }, { status: 400 });
    }

    if (isDevelopment) {
      // Di development, log saja tanpa kirim email
      console.log('Development mode - Email would be sent:', {
        to: 'ramdevganteng77@gmail.com',
        from: 'onboarding@resend.dev',
        subject: `Pesan Baru dari ${fullName}`,
        reply_to: email_id,
        message
      });

      return NextResponse.json({
        success: true,
        message: 'Email berhasil dikirim (development mode)',
      });
    }

    // Di production, kirim email sungguhan
    const data = await resend.emails.send({
      from: 'Portfolio Website <onboarding@resend.dev>',
      to: ['ramdevganteng77@gmail.com'],
      reply_to: email_id,
      subject: `Pesan Baru dari ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Pesan Baru dari Website</h2>
          <p><strong>Nama:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email_id}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Email berhasil dikirim',
      id: data.id 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Gagal mengirim email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 