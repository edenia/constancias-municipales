const fetch = require('node-fetch')

// const SERVICE_URLS = {
//   autenticacion: 'WebServices/Bccr.Firma.Fva.Entidades.Ws.BS/Autenticador.asmx',
//   firma: 'WebServices/Bccr.Firma.Fva.Entidades.Ws.BS/Firmador.asmx',
//   valida_certificado:
//     'WebServices/Bccr.Firma.Fva.Entidades.Ws.BS/ValidadorDeCertificado.asmx',
//   valida_documento:
//     'WebServices/Bccr.Firma.Fva.Entidades.Ws.BS/ValidadorDeDocumento.asmx',
//   valida_docs_v2:
//     'WebServices/Bccr.Firma.Fva.Entidades.ValidarDocumento.Ws.SI/ValidadorDeDocumentos.asmx',
//   verifica: 'WebServices/Bccr.Firma.Fva.Entidades.Ws.BS/Verificador.asmx',
//   sello:
//     'WebServices/Bccr.Firma.Fva.Entidades.Ws.SI/SelladorElectronicoConControlDeLlave.asmx'
// }

// const TEST_SERVICE_URLS = {
//   autenticacion:
//     'WebServices/Bccr.Fva.Entidades.AmbienteDePruebas.Ws.BS/Autenticador.asmx',
//   firma: 'WebServices/Bccr.Fva.Entidades.AmbienteDePruebas.Ws.BS/Firmador.asmx',
//   valida_certificado:
//     'WebServices/Bccr.Firma.Fva.Entidades.Ws.BS/ValidadorDeCertificado.asmx',
//   valida_documento:
//     'WebServices/Bccr.Firma.Fva.Entidades.Ws.BS/ValidadorDeDocumento.asmx',
//   valida_docs_v2:
//     'WebServices/Bccr.Firma.Fva.Entidades.ValidarDocumento.Ws.SI/ValidadorDeDocumentos.asmx',
//   verifica:
//     'WebServices/Bccr.Fva.Entidades.AmbienteDePruebas.Ws.BS/Verificador.asmx',
//   sello:
//     'WebServices/Bccr.Fva.Entidades.AmbDePruebas.Sello.Ws.SI/SelladorElectronicoConControlDeLlave.asmx'
// }

const sign = async () => {
  const requestOptions = {
    identidad: '08-0888-0888',
    documento: 'PG1vdmllPgogIDx0...CjwvbW92aWU+Cg==',
    formato: 'pdf',
    algoritmo_hash: 'Sha512',
    hash_doc: '637a7d07c5dbee59695aafbd3933b...bd3933b',
    resumen: 'este es un mensaje amigable sobre el documento',
    lugar: 'Limon',
    razon: 'Pruebas'
  }
  const response = await fetch(
    'http://bccr.fva.cr/WebServices/Bccr.Fva.Entidades.AmbienteDePruebas.Ws.BS/Firmador.asmx',
    requestOptions
  )

  return response
}

module.exports = {
  sign
}
