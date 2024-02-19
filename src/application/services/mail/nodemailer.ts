import * as nodemailer from "nodemailer";

export default class Nodemailer{

    execute(){
        return nodemailer.createTransport({
            host: process.env.SMTP_MAIL,
            port: 587,
            auth: {
                user: process.env.SERVICEMAIL_USER,
                pass: process.env.SERVICEMAIL_PASSWORD
            }
        });

    }
}

