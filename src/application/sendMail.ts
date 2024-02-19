import * as nodemailer from "nodemailer";
import nodemailerMailgunTransport from "nodemailer-mailgun-transport";

import { renderTemplate } from "./template";

export default class Mail {
  customerModel;
  logModel;
  constructor(customerModel: any, logModel: any) {
    this.customerModel = customerModel;
    this.logModel = logModel;
  }
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_MAIL,
    port: 587,
    auth: {
      user: process.env.SERVICEMAIL_USER,
      pass: process.env.SERVICEMAIL_PASSWORD,
    },
  });
  // private transporter = nodemailer.createTransport(
  //     nodemailerMailgunTransport({
  //       auth: {
  //         api_key: process.env.MAILGUN_API_KEY || "",
  //         domain: process.env.MAILGUN_DOMAIN_NAME || ""
  //       }
  //     })
  //   );

  async sendMail(
    email: string,
    fullname: string,
    senderMail: string
  ): Promise<void> {
    try {
      const senderMail = process.env.SERVICEMAIL_USER;

      const template = "convite";
      const model = {
        email: email,
        fullname: fullname,
        senderMail: senderMail,
      };
      const htmlTemplate = await renderTemplate(model, template);
      let attachments;
      const mailOptions = {
        from: `${process.env.SERVICEMAIL_NAME}<${senderMail}>`,
        to: `${fullname}<${email}>`,
        subject: "texto",
        html: htmlTemplate,
        bcc: [],
        replyTo: senderMail,
        attachments: [],
      };

      if (attachments) {
        mailOptions.attachments = attachments;
      }

      const info = await this.transporter.sendMail(mailOptions);
      await this.customerModel.updateOne(
        { email: email },
        {
          $set: {
            sendMail100DicasRendaExtra: true,
            confirmMail100DicasRendaExtra: false,
          },
        }
      );

      await this.logModel.create({
        email: email,
        status: "OK",
        event: "100DicasRendaExtra",
      });
      console.log("E-mail enviado:", info);
    } catch (error) {
      await this.logModel.create({
        email: email,
        status: "error",
        error: JSON.stringify(error),
        event: "100DicasRendaExtra",
      });

      console.error("Erro ao enviar e-mail:", error);
    }
  }
}
