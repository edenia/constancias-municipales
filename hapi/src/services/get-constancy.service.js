const axios = require('axios')
const { yaipanConfig } = require('../config')

const getConstancy = async ({ id }) => {
  const { data } = await axios.get(`${yaipanConfig.yaipanConstanciasApiEndpoint}/v1/constancias/generar?cedula=${id}`,
  { responseType: 'arraybuffer', 'decompress': true, headers:{ Authorization: `Token ${yaipanConfig.yaipanTokenAccess}` } })

  return data
}

module.exports = {
  getConstancy
}
