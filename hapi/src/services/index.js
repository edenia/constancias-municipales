const certificateAgent = require('./get-certificate-agent.service')
const digitalSignature = require('./digital-signature.service')
const certificates = require('./certificates.service')
const constancy = require('./get-constancy.service')
const hash = require('./generate-hash.service')

module.exports = {
  certificates,
  digitalSignature,
  constancy,
  hash,
  certificateAgent
}
