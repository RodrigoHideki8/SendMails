import express from "express";
import multer from "multer";
import ProcessMails from "./application/processMails";
import dotenv from "dotenv";
dotenv.config();
import CustomerModel from "./application/database/model/customers.model";
import LogModel from "./application/database/model/sendmailslog.model";
import mongodb from "./application/database/mongo";
import Mail from "./application/sendMail";
const app = express();
const sendMail = new Mail(CustomerModel, LogModel);
const processMail = new ProcessMails(sendMail, CustomerModel);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/upload", upload.single("arquivo"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("Nenhum arquivo enviado.");
    }

    const data = req.file.buffer;

    await processMail.execute(data);

    res.status(200).send("E-mails enviados!");
  } catch (error) {
    console.error("Erro durante o processamento:", error);
    res.status(500).send("Erro interno durante o processamento.");
  }
});

app.listen(3000, async () => {
  console.log("Server is running on port 3000!");
  await mongodb();
});
