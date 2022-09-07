const nodemailer = require('nodemailer')
const configurations = require('../configurations/configurations.json')

const Mailer = async (recipient, subject, text, message) => {
    let transporter = nodemailer.createTransport({
      host: configurations.mailer.host,
      port: configurations.mailer.port,
      secure: configurations.mailer.secure, 
      auth: {
        user: configurations.mailer.auth.email,
        pass: configurations.mailer.auth.password, 
      },
    });
  
    let info = await transporter.sendMail({
      from: '"Teste envio 👻" <teste@bombeirosvoluntarios.top>',
      to: recipient,
      subject: subject, 
      text: text, 
      html: message,
    });
}

module.exports = Mailer