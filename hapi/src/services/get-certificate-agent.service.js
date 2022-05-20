// const { electronicAgentCertificate } = require('../../../certificates/cert.cer')
const fs = require('fs')

const getCertificateAgent = () => {
  // const electronicAgentCertificate = fs.readFile(
  //   '../../../certificates/cert.cer'
  // )
  fs.readFile('../../../certificates/cert.cer', function (err, data) {
    if (err) return console.log(err)
    console.log('result read: ' + data)
  })
  // console.log({ electronicAgentCertificate })
}

module.exports = {
  getCertificateAgent
}
