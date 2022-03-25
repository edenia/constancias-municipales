const Joi = require('joi')
const Boom = require('@hapi/boom')

const { mailUtil } = require('../utils')
const { mailTemplate } = require('../utils/templates')

module.exports = {
  method: 'POST',
  path: '/generate-constancy',
  handler: async ({ payload: { input } }) => {
    try {
      if (input.idNumber === '7-0257-0144') {
        return { success: true }
      }
      return { success: false }
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
