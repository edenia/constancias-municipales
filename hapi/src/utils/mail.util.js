const nodemailer = require('nodemailer')

const {
  mailConfig: {
    host,
    port,
    user,
    pass,
    urlOrganization,
    urlImage,
    facebookLink,
    twitterLink,
    instagramLink,
    youtubeLink
  }
} = require('../config')

const send = async ({ idUser, to, subject, template, constancia }) => {
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
        urlImage,
        facebookLink,
        twitterLink,
        instagramLink,
        youtubeLink
      }),
      attachments: [
        {
          filename: `constancia-municipal-${idUser}.pdf`,
          content: constancia
        }
      ]
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  send
}
