/* eslint-disable camelcase */
const {
  RecaptchaEnterpriseServiceClient
} = require('@google-cloud/recaptcha-enterprise')
const Joi = require('joi')
const Boom = require('@hapi/boom')

const { certificates } = require('../services')
const { generalConfig, reCaptchaConfig } = require('../config')
const { mailUtil } = require('../utils')
const { mailTemplate } = require('../utils/templates')

const reCaptchaClient = new RecaptchaEnterpriseServiceClient()

module.exports = {
  method: 'POST',
  path: '/generate-constancy',
  handler: async ({ payload: { input } }) => {
    try {
      const [assessment] = await reCaptchaClient.createAssessment({
        parent: reCaptchaClient.projectPath(reCaptchaConfig.projectId),
        assessment: {
          event: {
            token: input.reCaptchaToken,
            siteKey: reCaptchaConfig.key
          }
        }
      })

      if (assessment.tokenProperties.valid !== true) {
        return { success: -2 }
      }

      // CALL Yaipan API
      // if (input.idNumber !== '7-0257-0144') {
      //   return { success: -1 }
      // }

      const data = await certificates.getOne({
        id: { _eq: input.idNumber }
      })

      if (!data) {
        // CALL Sing BCCR
        // digitalSignature.sign()

        await certificates.insert({ id: input.idNumber })

        // SEND EMAIL
        mailUtil.send({
          idUser: input.idNumber,
          to: input.email,
          subject: 'Certificado Municipal de propiedades',
          template: mailTemplate.generateConfirmation
        })
        return { success: 1 }
      }

      if (
        new Date(data.updated_at).toDateString() !== new Date().toDateString()
      ) {
        // CALL Sing BCCR

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
          // CALL Sing BCCR

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

      // SEND EMAIL
      mailUtil.send({
        idUser: input.idNumber,
        to: input.email,
        subject: 'Certificado Municipal de propiedades',
        template: mailTemplate.generateConfirmation
      })

      return { success: 1 }
    } catch (error) {
      throw Boom.badRequest(error.message, { code: 'BAD_REQUEST' })
    }
  },
  options: {
    validate: {
      payload: Joi.object({
        input: Joi.object({
          reCaptchaToken: Joi.string().required(),
          idNumber: Joi.string().required(),
          email: Joi.string().required()
        }).required()
      }).options({ stripUnknown: true })
    }
  }
}
