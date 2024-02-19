class Configs {
  public host = process.env.SMTP_MAIL;
  public port = 587;
  public user = process.env.USER_MAIL;
  public password = process.env.PASSWORD_MAIL;
}

export default new Configs();
