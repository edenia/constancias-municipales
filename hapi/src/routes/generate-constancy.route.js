/* eslint-disable camelcase */
const {
  RecaptchaEnterpriseServiceClient
} = require('@google-cloud/recaptcha-enterprise')
const Joi = require('joi')
const Boom = require('@hapi/boom')

const {
  certificates,
  constancy,
  hash,
  digitalSignature
} = require('../services')
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
      let signedDoc
      // CALL Yaipan API
      const constancia = await constancy.getConstancy({ id: input.idNumber })

      if (!constancia) {
        return { success: -1 }
      }

      const data = await certificates.getOne({
        id: { _eq: input.idNumber }
      })
      const docHash = hash.generateHash(constancia)

      if (!data) {
        // CALL Sing BCCR
        signedDoc = await digitalSignature.sign({ constancia, docHash })
        await certificates.insert({ id: input.idNumber, email: input.email })

        // SEND EMAIL
        mailUtil.send({
          idUser: input.idNumber,
          to: input.email,
          subject: 'Certificado Municipal de propiedades',
          template: mailTemplate.generateConfirmation,
          constancia: signedDoc.documento
        })
        return { success: 1 }
      }

      if (
        new Date(data.updated_at).toDateString() !== new Date().toDateString()
      ) {
        // CALL Sing BCCR
        signedDoc = await digitalSignature.sign({ constancia, docHash })
        await certificates.update({
          where: {
            id: { _eq: input.idNumber }
          },
          _set: {
            emitted_quantity: 1,
            email: input.email
          }
        })
      } else {
        if (data.emitted_quantity >= generalConfig.certificateLimit)
          return { success: 0 }
        else {
          // CALL Sing BCCR
          signedDoc = await digitalSignature.sign({ constancia, docHash })
          await certificates.update({
            where: {
              id: { _eq: input.idNumber }
            },
            _set: {
              emitted_quantity: data.emitted_quantity + 1,
              email: input.email
            }
          })
        }
      }

      // SEND EMAIL
      mailUtil.send({
        idUser: input.idNumber,
        to: input.email,
        subject: 'Certificado Municipal de propiedades',
        template: mailTemplate.generateConfirmation,
        constancia: signedDoc.documento
      })

      return { success: 1 }
    } catch (error) {
      console.log({ error })
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
