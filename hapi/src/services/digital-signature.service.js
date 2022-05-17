const fetch = require('node-fetch')
const Boom = require('@hapi/boom')

const sign = async () => {
  // Dim elCertificadoDeLaEntidad As X509Certificate
  // const elCertificadoDeLaEntidad
  // Dim laSolicitudDeFirma As SolicitudDeFirma
  // const elCertificadoDeLaEntidad
  // Dim laRespuestaDelServicio As RespuestaDeLaSolicitud
  // const laRespuestaDelServicio
  try {
    // const elCertificadoDeLaEntidad = ObtengaElCertificadoDeAgenteElectronico()
    // const laSolicitudDeFirma = CreeLaSolicitudDeFirma()
    // const elServicio = new Ws.ServicioFirmador.Firmador
    // elServicio.Url = ObtengaLaUrlDelServicioFirmador()
    // elServicio.ClientCertificates.Add(elCertificadoDeLaEntidad)
    // laRespuestaDelServicio =
    //   elServicio.RecibaLaSolicitudDeFirmaXmlEnvelopedCoFirma(laSolicitudDeFirma)
  } catch (error) {
    console.log({ error })
    throw Boom.badRequest(error.message, { code: 'BAD_REQUEST' })
  }

  // const requestOptions = {
  //   CodNegocio: '08-0888-0888',
  //   FechaDeReferenciaDeLaEntidad: '17/5/2022',
  //   Documento: 'PG1vdmllPgogIDx0...CjwvbW92aWU+Cg==',
  //   IDAlgoritmoHash: 'sha256',
  //   HashDocumento: '637a7d07c5dbee59695aafbd3933b...bd3933b',
  //   Lugar: 'Limon',
  //   Razon: 'Pruebas'
  // }
  // const response = await fetch(
  //   'http://bccr.fva.cr/WebServices/Bccr.Fva.Entidades.AmbienteDePruebas.Ws.BS/Firmador.asmx',
  //   requestOptions
  // )
  // // 'WebServices/Bccr.Fva.Entidades.AmbDePruebas.Sello.Ws.SI/SelladorElectronicoConControlDeLlave.asmx'
  // return response
}

module.exports = {
  sign
}
