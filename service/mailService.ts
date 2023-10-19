import nodemailer from 'nodemailer';
//-----------------------------------------------------------------------------
export async function sendMail(toEmail: string, subject: string, text: string): Promise<void> {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: subject,
    text: text,
  };

  await new Promise<void>((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err: any, response: void | PromiseLike<void>) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}