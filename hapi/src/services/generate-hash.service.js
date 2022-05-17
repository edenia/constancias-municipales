const { createHash } = require('crypto')

const generateHash = doc => {
  const docString = JSON.stringify(doc)
  return createHash('sha256').update(docString).digest('hex')
}

module.exports = {
  generateHash
}
