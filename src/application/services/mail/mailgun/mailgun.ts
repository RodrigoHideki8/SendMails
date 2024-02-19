const nodemailer = require("nodemailer");
const nodemailerMailgunTransport = require("nodemailer-mailgun-transport");

const transporter = nodemailer.createTransport(
  nodemailerMailgunTransport({
    auth: {
      api_key: process.env.MAILGUN_API_KEY || "",
      domain: process.env.MAILGUN_DOMAIN_NAME || "",
    },
  })
);
