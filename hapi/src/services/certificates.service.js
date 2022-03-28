/* eslint-disable camelcase */
const { hasuraUtil } = require('../utils')

const GET_ONE = `
  query ($where: certificates_issued_bool_exp) {
    certificates_issued(where: $where, limit: 1) {
      id
      updated_at
      emitted_quantity
    }
  }
`

const INSERT = `
  mutation ($certificates_issued: certificates_issued_insert_input!) {
    insert_certificates_issued_one(object: $certificates_issued) {
      id
    }
  }
`

const getOne = async (where = {}) => {
  const { certificates_issued } = await hasuraUtil.request(GET_ONE, { where })
  if (certificates_issued && certificates_issued.length > 0)
    return certificates_issued[0]

  return null
}

const insert = async certificates_issued => {
  const { insert_certificates_issued_one } = await hasuraUtil.request(INSERT, {
    certificates_issued
  })
  return insert_certificates_issued_one || {}
}

const update = async ({ where, _set }) => {
  const mutation = `
    mutation ($where: certificates_issued_bool_exp!, $_set: certificates_issued_set_input) {
      update_certificates_issued(where: $where, _set: $_set) {
        affected_rows
      }
    }
  `
  const {
    update_certificates_issued: { affected_rows }
  } = await hasuraUtil.request(mutation, { where, _set })

  return affected_rows > 0
}

module.exports = {
  getOne,
  insert,
  update
}
