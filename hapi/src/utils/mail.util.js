const nodemailer = require('nodemailer')
const { jsPDF } = require('jspdf') // will automatically load the node version

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

const send = async ({ idUser, to, subject, template }) => {
  try {
    const transporter = nodemailer.createTransport({
      host,
      secure: false,
      port,
      auth: { user, pass },
      tls: { rejectUnauthorized: false }
    })
    // eslint-disable-next-line new-cap
    const doc = new jsPDF()
    doc.text('Hello world!', 10, 10)

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
          content: Buffer.from(doc.output('arraybuffer'))
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
