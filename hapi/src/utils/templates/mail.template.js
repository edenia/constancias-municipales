const HEAD = `
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
`

const FOOTER = `
    <div style="background-color: #000; margin-left: auto; margin-right: auto; padding-top: 20px;">
        <p align="left" style="width: 348px; margin: 0px auto 8px auto; font-family: Arial; font-size: 12px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: 1.33; letter-spacing: 1.5px; text-align: center; color: #fff;">
            THIS PROJECT WAS FUNDED THROUGH THE PROTON GOVERNANCE COMMITTEE WORKER PROPOSAL SYSTEM
        </p>
        <p align="left" style="flex-grow: 0; margin: 0px 16px 14px; font-family: Arial; font-size: 14px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: 1.14; letter-spacing: 0.44px; text-align: center; color: #fff;">
            <a href="https://forms.gle/GWHig5ciAvg5fdEH7" style="color: #fff;">
                Apply Here for Funding
            </a>
        </p>
        <div style="padding-bottom: 8px; text-align: center;">
            <a href="https://www.facebook.com/protonxpr" style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/facebook.png">
            </a>
            <a href="https://www.instagram.com/protonxpr" style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/instagram.png">
            </a>
            <a href="https://twitter.com/protonxpr" style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/twitter.png">
            </a>
            <a href="https://www.reddit.com/r/ProtonChain" style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/reddit.png">
            </a>
            <a href="https://github.com/edenia/proton-affiliate" style="text-decoration: none;">
                <img style="width: 32px; height: 32px; margin-right: 16px;" src="https://earnproton.com/icons/github.png">
            </a>
            <a href="https://t.me/protonxpr" style="text-decoration: none;">
                <img style="width: 32px; height: 32px;" src="https://earnproton.com/icons/telegram.png">
            </a>
        </div>
    </div>
`

const generateConfirmation = () => {
  return `
    <head>
        ${HEAD}
    </head>
    <body>
        <table style="margin-left: auto; margin-right: auto;">
            <tr>
                <div style="max-width: 640px; margin-left: auto; margin-right: auto;">
                    <a href="https://earnproton.com" style="text-decoration: none; margin: 40px 0px 0px 16px; width: 178px; height: 53px;">
                        <img style="object-fit: scale-down;" src="https://earnproton.com/icons/proton.png"/>
                    </a>
                    <p align="left" style="margin: 24px 16px 24px; font-family: Arial; font-size: 21px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: normal; letter-spacing: 0.15px; text-align: left; color: #000;">
                      Estimado usuario,
                    </p>
                    <p align="left" style="margin: 0px 16px 8px; font-family: Arial; font-size: 16px; font-weight: normal; font-stretch: normal; font-style: normal; line-height: 1.5; letter-spacing: 0.44px; text-align: left; color: #000;">
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
                ${FOOTER}
            </tr>
        </table>
    </body>
  `
}

module.exports = {
  generateConfirmation
}
