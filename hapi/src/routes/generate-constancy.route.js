/* eslint-disable camelcase */
const Joi = require('joi')
const Boom = require('@hapi/boom')

const { certificates } = require('../services')
const { generalConfig } = require('../config')
const { mailUtil } = require('../utils')
const { mailTemplate } = require('../utils/templates')
const { date } = require('joi')

module.exports = {
  method: 'POST',
  path: '/generate-constancy',
  handler: async ({ payload: { input } }) => {
    try {
      // Call Yaipan API
      // if (input.idNumber !== '7-0257-0144') {
      //   return { success: -1 }
      // }
      console.log('TEST')
      const data = await certificates.getOne({
        id: { _eq: input.idNumber }
      })
      console.log({ TEST2: new Date(data.updated_at).toDateString() })
      console.log({ TEST3: new Date().toDateString() })
      if (!data) {
        const result = await certificates.insert({ id: input.idNumber })
        console.log({ result })
        return { success: 1 }
      }
      console.log({ generalConfig })
      if (
        new Date(data.updated_at).toDateString() !== new Date().toDateString()
      ) {
        await certificates.update({
          where: {
            id: { _eq: input.idNumber }
          },
          _set: {
            emitted_quantity: 1
          }
        })
      } else {
        if (data.emitted_quantity >= generalConfig.certificateLimit)
          return { success: 0 }
        else {
          await certificates.update({
            where: {
              id: { _eq: input.idNumber }
            },
            _set: {
              emitted_quantity: data.emitted_quantity + 1
            }
          })
        }
      }

      return { success: 1 }
      // mailUtil.send({
      //   to: input.email,
      //   subject:
      //     'Further action is required to activate your Proton Affiliate account',
      //   template: mailTemplate.generateConfirmation
      // })
    } catch (error) {
      throw Boom.badRequest(error.message, { code: 'BAD_REQUEST' })
    }
  },
  options: {
    validate: {
      payload: Joi.object({
        input: Joi.object({
          idNumber: Joi.string().required(),
          email: Joi.string().required()
        }).required()
      }).options({ stripUnknown: true })
    }
  }
}
