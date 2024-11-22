import { Resend } from 'resend';

const resend = new Resend('re_hrdaagTx_3V8BqV2BSRCraCFvXnZJp3XW');

export const sendEmail = async (data: { 
  fullName: string; 
  email_id: string; 
  message: string; 
}) => {
  try {
    const result = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['ramdevganteng77@gmail.com'],
      subject: `New message from ${data.fullName}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> ${data.email_id}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}; 