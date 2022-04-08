const HEAD = `
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
`

const getFooter = ({
  facebookLink,
  twitterLink,
  instagramLink,
  youtubeLink
}) => {
  return `
    <div style="background-color: #000; margin-left: auto; margin-right: auto; padding-top: 20px;">
        <div style="padding-bottom: 8px; text-align: center;">
            <a href=${facebookLink} style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/facebook.png">
            </a>
            <a href=${instagramLink} style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/instagram.png">
            </a>
            <a href=${twitterLink} style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/twitter.png">
            </a>
            <a href=${youtubeLink} style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/github.png">
            </a>
        </div>
    </div>
`
}

const generateConfirmation = ({
  urlOrganization,
  urlImage,
  facebookLink,
  twitterLink,
  instagramLink,
  youtubeLink
}) => {
  return `
    <head>
        ${HEAD}
    </head>
    <body>
        <table style="margin-left: auto; margin-right: auto;">
            <tr>
                <div style="max-width: 640px; margin-left: auto; margin-right: auto;">
                    <a href=${urlOrganization} style="text-decoration: none; margin: 40px 0px 0px 16px; width: 178px; height: 53px;">
                        <img style="object-fit: scale-down;" src=${urlImage}/>
                    </a>
                    <p align="left" style="margin-top: 24px; font-family: Arial; font-size: 20px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: 0.15px; text-align: left; color: #000;">
                      Estimado usuario,
                    </p>
                    <img width="30%" src="https://raw.githubusercontent.com/edenia/constancias-municipales/main/webapp/public/icons/line-icon.png" />
                    <p align="left" style="margin: 24px 16px 8px; font-family: Arial; font-size: 16px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: 1.5; letter-spacing: 0.44px; text-align: left; color: #000;">
                      Adjunto encontrará la constancia digital de impuestos al día para propiedades solicitada desde la 
                      plataforma en línea de la Municipalidad de Orotina. Este documento ha sido firmado digitalmente con la 
                      firma digital del Banco Central de Costa Rica, la cual tiene validez en otras instituciones del país. 
                    </p>
                    <p align="left" style="margin: 0px 16px 8px; font-family: Arial; font-size: 16px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: 1.5; letter-spacing: 0.44px; text-align: left; color: #000;">
                      Adjunto encontrará la constancia digital de impuestos al día para propiedades solicitada desde la 
                      plataforma en línea de la Municipalidad de Orotina. Este documento ha sido firmado digitalmente con la 
                      firma digital del Banco Central de Costa Rica, la cual tiene validez en otras instituciones del país. 
                    </p>
                    <p align="left" style="margin: 0px 16px 8px; font-family: Arial; font-size: 16px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: 1.5; letter-spacing: 0.44px; text-align: left; color: #000; overflow-wrap: break-word;">
                      Para hacer uso del documento, descárguelo y guárdelo en su computadora o dispositivo móvil. Este 
                      documento firmado solo tiene validez en formato digital, por lo que si lo imprime no será válido para 
                      presentar en ninguna institución. Si requiere una versión impresa, por favor apersónese en las oficinas de 
                      la Municipalidad de Orotina.
                    </p>
                    <br>
                    <p align="left" style="margin: 0px 16px 35px; font-family: Arial; font-size: 16px; font-weight: bold; font-stretch: normal; font-style: normal; line-height: 1.5; letter-spacing: 0.44px; text-align: left; color: #000;">
                        <br>
                        En caso de tener alguna duda, puede comunicarse con la Municipalidad (teléfono de servicio al cliente 
                        2428-8047 Ext. 0, 01). 
                    </p>
                </div>
            </tr>
            <tr>
                ${getFooter({
                  facebookLink,
                  twitterLink,
                  instagramLink,
                  youtubeLink
                })}
            </tr>
        </table>
    </body>
  `
}

module.exports = {
  generateConfirmation
}
