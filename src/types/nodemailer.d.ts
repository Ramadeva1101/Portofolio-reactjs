declare module 'nodemailer' {
  export interface Transporter {
    sendMail(mailOptions: Mail.Options): Promise<any>;
  }
} 