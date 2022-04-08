import React, { memo, useState, useEffect } from 'react'
import { Box, Grid, Typography, CircularProgress } from '@mui/material'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik'
import { useMutation } from '@apollo/client'

import { useSharedState } from '../../context/state.context'
import { BaseTextField, BaseButton } from '../../components'
import { MUTATION_GENERATE_CONSTANCY } from '../../gql'
import { requestProofSchema } from '../../schemas'

const { defaultValues, schema } = requestProofSchema

const Home = () => {
  const [showProgressBar, setShowProgressBar] = useState(false)
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [, { showMessage }] = useSharedState()
  const { t } = useTranslation('homeRoute')

  const [generateConstancy, { error: errorGenerateConstancy }] = useMutation(
    MUTATION_GENERATE_CONSTANCY
  )

  const isEmailMatch = ({ email, check, errors }) => {
    if (email !== check || !!errors.retypeEmailAddress) return true

    return false
  }

  const getErrorMessage = ({ email, check, errors }) => {
    if (email !== check || !!errors.retypeEmailAddress)
      return 'emailDoesNotMatch'

    return ''
  }

  useEffect(async () => {
    if (!errorGenerateConstancy) return
    showMessage({
      type: 'error',
      content: t('errorOccurredTryAgain')
    })
  }, [errorGenerateConstancy])

  return (
    <Grid container>
      <Grid item md={12}>
        <Box mt={6} mb={2}>
          <img width={180} src="icons/paper-icon.png" />
        </Box>
        <Box mb={1}>
          <Typography variant="h4">{t('municipalRecordsManager')}</Typography>
        </Box>
        <img width="50%" src="icons/line-icon.png" />
        <Typography variant="h6" component="div">
          <Box pt={6} width="50%" fontWeight="bold">
            {t('subtitle')}
          </Box>
        </Typography>
        <Box pt={3} pb={10}>
          <Typography variant="body1">{t('firstBulletPoint')}</Typography>
          <Typography variant="body1">{t('secondBulletPoint')}</Typography>
          <Typography variant="body1">{t('thirdBulletPoint')}</Typography>
        </Box>
        <Typography variant="h6">
          {t('enterInformationRequestDigitalCertificate')}
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Formik
          enableReinitialize
          initialValues={defaultValues}
          validationSchema={schema}
          onSubmit={async ({ idNumber, email }, formikHelpers) => {
            try {
              const reCaptchaToken = await executeRecaptcha?.('submit')
              if (!reCaptchaToken) {
                return
              }
              setShowProgressBar(true)
              const isValidData = await generateConstancy({
                variables: {
                  reCaptchaToken,
                  idNumber,
                  email
                }
              })

              if (isValidData?.data?.generate_constancy?.success === 1) {
                showMessage({
                  type: 'success',
                  content: t('requestBeenSentSuccessfully')
                })
                formikHelpers.resetForm()
                await new Promise(resolve => setTimeout(resolve, 2000))
                window.location.href = '/thanks'
              } else if (isValidData?.data?.generate_constancy?.success === 0) {
                showMessage({
                  type: 'error',
                  content: t('haveExceededDailyRequestLimit')
                })
              } else {
                showMessage({
                  type: 'error',
                  content: t(
                    isValidData?.data?.generate_constancy?.success === -2
                      ? 'errorReCaptcha'
                      : 'InvalidDataMessage'
                  )
                })
              }
              setShowProgressBar(false)
            } catch (error) {
              console.error(error)
            }
          }}
        >
          {({ errors, touched, values }) => (
            <Form>
              <Grid container justifyContent="space-between">
                <Grid item xs={12} md={5}>
                  <Box pl={6}>
                    <Box pt={10}>
                      <Typography variant="subtitle1">
                        {t('idNumber')}
                      </Typography>
                    </Box>
                    <Field
                      id="idNumber"
                      name="idNumber"
                      error={!!(touched.idNumber && errors.idNumber)}
                      helperText={touched.idNumber && t(errors.idNumber || '')}
                      as={BaseTextField}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box pr={6}>
                    <Box pt={10}>
                      <Typography variant="subtitle1">{t('email')}</Typography>
                    </Box>
                    <Field
                      id="email"
                      name="email"
                      error={!!(touched.email && errors.email)}
                      helperText={touched.email && t(errors.email || '')}
                      as={BaseTextField}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box pl={6}>
                    <Box pt={10}>
                      <Typography variant="subtitle1">
                        {t('retypeEmailAddress')}
                      </Typography>
                    </Box>
                    <Field
                      id="retypeEmailAddress"
                      name="retypeEmailAddress"
                      error={
                        !!touched.retypeEmailAddress &&
                        isEmailMatch({
                          email: values.email,
                          check: values.retypeEmailAddress,
                          errors
                        })
                      }
                      helperText={
                        touched.retypeEmailAddress &&
                        t(
                          errors.retypeEmailAddress ||
                            getErrorMessage({
                              email: values.email,
                              check: values.retypeEmailAddress,
                              errors
                            })
                        )
                      }
                      as={BaseTextField}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Box pt={10} paddingX={68} display="grid" textAlign="center">
                    <Box margin="auto">
                      {showProgressBar && <CircularProgress />}
                    </Box>
                    <BaseButton
                      variant="contained"
                      type="submit"
                      color="primary"
                      // disabled={loading}
                    >
                      {t('submit')}
                    </BaseButton>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}

Home.propTypes = {}

export default memo(Home)
