const nodemailer = require('nodemailer')
const {
  mailConfig: { host, port, user, pass }
} = require('../config')

const send = async ({ to, subject, template }) => {
  try {
    const transporter = nodemailer.createTransport({
      host,
      secure: false,
      port,
      auth: { user, pass },
      tls: { rejectUnauthorized: false }
    })

    await transporter.sendMail({
      from: `Constancias Municipales <${user}>`,
      to,
      subject,
      html: template()
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  send
}
