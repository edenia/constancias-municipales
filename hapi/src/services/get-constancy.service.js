const fetch = require('node-fetch')
const { yaipanConfig } = require('../config')

const getConstancy = async ({ id }) => {
  const requestOptions = {
    method: 'GET',
    headers: { Authorization: `Token ${yaipanConfig.yaipanTokenAccess}` }
  }

  const response = await fetch(
    `${yaipanConfig.yaipanConstanciasApiEndpoint}/v1/constancias/generar?cedula=${id}`,
    requestOptions
  )

  if (response.status === 200) return response.body
  return undefined
}

module.exports = {
  getConstancy
}
