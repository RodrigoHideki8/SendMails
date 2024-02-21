# Envio de E-mails com Anexo e Registro de Logs

Este projeto consiste em uma aplicação Node.js para enviar e-mails com anexos, processando dados de um arquivo CSV, e registrar logs das operações de envio de e-mail.

## Funcionalidades

- **Envio de E-mails com Anexo:** A aplicação recebe um arquivo CSV contendo informações de destinatários (como e-mail e nome) e realiza o envio de e-mails personalizados para cada destinatário, utilizando um template HTML para o corpo do e-mail.

- **Registro de Logs:** A aplicação registra logs das operações de envio de e-mail, incluindo informações como o status do envio, possíveis erros ocorridos e o evento relacionado ao envio do e-mail.

## Como Usar

1. **Configuração do Ambiente:**
   - Certifique-se de ter o Node.js e o npm instalados em sua máquina.
   - Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as credenciais de e-mail e as informações de conexão com o banco de dados MongoDB.

2. **Instalação das Dependências:**
   - Execute o comando `npm install` para instalar as dependências do projeto.

3. **Execução da Aplicação:**
   - Execute o comando `npm start` para iniciar o servidor.
   - O servidor estará disponível em `http://localhost:3000`.

4. **Envio de E-mails:**
   - Envie uma requisição POST para `http://localhost:3000/upload` com um arquivo CSV contendo os dados dos destinatários no corpo da requisição. Certifique-se de incluir o campo `arquivo` no formulário.

## Dependências

- `express`: Para criação do servidor web.
- `multer`: Para upload de arquivos.
- `dotenv`: Para carregar variáveis de ambiente a partir de um arquivo `.env`.
- `mongoose`: Para interagir com o banco de dados MongoDB.
- `xlsx`: Para leitura de arquivos Excel.
- `nodemailer`: Para envio de e-mails.
- `nodemailer-mailgun-transport`: Para utilizar o serviço Mailgun como transporte de e-mails.
- `ejs`: Para renderização de templates HTML.

Certifique-se de ter todas as dependências instaladas antes de executar a aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

