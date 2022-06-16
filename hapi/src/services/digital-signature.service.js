const { bccrConfig } = require('../config')
const request = require('request-promise')
const Boom = require('@hapi/boom')

const sign = async ({ constancia, docHash }) => {
  const upperCaseHashCreatorMethod =
    bccrConfig.hashCreatorMethod.charAt(0).toUpperCase() +
    bccrConfig.hashCreatorMethod.slice(1)
  try {
    const options = {
      method: 'POST',
      uri: `${bccrConfig.signerUrl}:5000/signer`,
      body: {
        file: Buffer.from(constancia).toString('base64'),
        docHash,
        location: bccrConfig.locationSealingRequest,
        reason: bccrConfig.reasonSealingRequest,
        hashAlgorithm: upperCaseHashCreatorMethod,
        docType: bccrConfig.docSealingType,
        negocio: bccrConfig.negocio,
        entidad: bccrConfig.entidad
      },
      json: true
    }
    const response = await request(options)

    return await response
  } catch (error) {
    throw Boom.badRequest(error.message, { code: 'BAD_REQUEST' })
  }
}

module.exports = {
  sign
}
