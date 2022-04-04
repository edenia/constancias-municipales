const nodemailer = require('nodemailer')
const {
  mailConfig: { host, port, user, pass, urlOrganization, urlImage }
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
      html: template({
        urlOrganization,
        urlImage
      })
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  send
}
