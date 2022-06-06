const crypto = require('crypto')
const { bccrConfig } = require('../config')

const generateHash = doc => {
  return crypto
    .createHash(bccrConfig.hashCreatorMethod)
    .update(doc)
    .digest('base64')
}

module.exports = {
  generateHash
}
