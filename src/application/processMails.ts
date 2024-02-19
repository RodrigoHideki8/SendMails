import * as xlsx from "xlsx";

export default class ProcessMails {
  mail;
  customerModel;
  constructor(mail: any, customerModel: any) {
    this.mail = mail;
    this.customerModel = customerModel;
  }

  readCSV(buffer: Buffer): any[] {
    const workbook = xlsx.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    return xlsx.utils.sheet_to_json(sheet);
  }

  async execute(data: Buffer) {
    const dataCSV = this.readCSV(data);

    for (const data of dataCSV) {
      const { email, fullname } = data;
      const alreadySend = await this.customerModel.findOne({
        email: email,
        sendMail100DicasRendaExtra: true,
      });
      if (!alreadySend) {
        await this.mail.sendMail(email, fullname);
      }
    }
  }
}
