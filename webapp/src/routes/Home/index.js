import React, { memo, useState, useEffect } from 'react'
import {
  Box,
  Grid,
  Link,
  Typography,
  CircularProgress,
  useMediaQuery
} from '@mui/material'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik'
import { useMutation } from '@apollo/client'
import { useTheme } from '@mui/styles'

import { useSharedState } from '../../context/state.context'
import { BaseTextField, BaseButton } from '../../components'
import { MUTATION_GENERATE_CONSTANCY } from '../../gql'
import { requestProofSchema } from '../../schemas'

const { defaultValues, schema } = requestProofSchema

const Home = () => {
  const theme = useTheme()
  const { t } = useTranslation('homeRoute')
  const [, { showMessage }] = useSharedState()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const [showProgressBar, setShowProgressBar] = useState(false)

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
        <Box paddingX={smDown ? 3 : 6}>
          <Box mt={6} mb={3}>
            <img width={140} src="icons/paper-icon.png" />
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
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box bgcolor="primary.main" paddingY={8} paddingX={smDown ? 3 : 0}>
          <Box pl={smDown ? 0 : 6}>
            <Typography color="common.white" variant="h6">
              {t('enterInformationRequestDigitalCertificate')}
            </Typography>
          </Box>
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
                  await new Promise(resolve => setTimeout(resolve, 1500))
                  window.location.href = '/thanks'
                } else if (
                  isValidData?.data?.generate_constancy?.success === 0
                ) {
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
                    <Box pl={smDown ? 0 : 6}>
                      <Box pt={10}>
                        <Typography color="common.white" variant="subtitle1">
                          {t('idNumber')}
                        </Typography>
                      </Box>
                      <Field
                        id="idNumber"
                        name="idNumber"
                        error={!!(touched.idNumber && errors.idNumber)}
                        helperText={
                          touched.idNumber && t(errors.idNumber || '')
                        }
                        as={BaseTextField}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <Box pr={smDown ? 0 : 6}>
                      <Box pt={10}>
                        <Typography color="common.white" variant="subtitle1">
                          {t('email')}
                        </Typography>
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
                    <Box pl={smDown ? 0 : 6}>
                      <Box pt={10}>
                        <Typography color="common.white" variant="subtitle1">
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
                    <Box
                      pt={10}
                      paddingX={smDown ? 15 : 68}
                      display="grid"
                      textAlign="center"
                    >
                      <BaseButton
                        variant="contained"
                        type="submit"
                        color="secondary"
                        // disabled={loading}
                      >
                        <Link underline="none" color="common.white">
                          {t('submit')}
                        </Link>
                        {showProgressBar && (
                          <Box pl={2} display="flex">
                            <CircularProgress size={25} />
                          </Box>
                        )}
                      </BaseButton>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
    </Grid>
  )
}

Home.propTypes = {}

export default memo(Home)
