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
      uri: 'http://172.16.24.36:5000/signer',
      body: {
        file: Buffer.from(constancia).toString('base64'),
        docHash,
        location: bccrConfig.locationSealingRequest,
        reason: bccrConfig.reasonSealingRequest,
        hashAlgorithm: upperCaseHashCreatorMethod,
        docType: bccrConfig.docSealingType
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
