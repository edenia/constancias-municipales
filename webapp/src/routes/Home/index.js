import React, { memo, useState, useEffect } from 'react'
import {
  Box,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  CircularProgress
} from '@mui/material'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { makeStyles, useTheme } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik'
import { useMutation } from '@apollo/client'

import { useSharedState } from '../../context/state.context'
import { BaseTextField, BaseButton } from '../../components'
import { MUTATION_GENERATE_CONSTANCY } from '../../gql'
import { requestProofSchema } from '../../schemas'

import styles from './styles'

const useStyles = makeStyles(styles)

const { defaultValues, schema } = requestProofSchema

const Home = () => {
  const theme = useTheme()
  const classes = useStyles()
  const { t } = useTranslation('homeRoute')
  const [, { showMessage }] = useSharedState()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
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
    <Grid container className={classes.gridHeight}>
      <Grid item xs={12} md={7} className={classes.gridHeight}>
        <Box
          borderRight={mdDown ? 0 : `3px solid ${theme.palette.secondary.main}`}
          borderBottom={
            mdDown ? `3px solid ${theme.palette.secondary.main}` : 0
          }
          bgcolor="common.white"
          height="100%"
          position="relative"
          pb={mdDown ? 4 : 0}
        >
          <Box
            pt={3}
            pb={2}
            paddingX={smDown ? 2 : 3}
            className={classes.boxHeaderStyle}
            bgcolor={theme.extraColors.secondaryVariantOpacity}
          >
            <Typography
              textTransform="uppercase"
              fontWeight="bold"
              variant="h4"
              align={smDown ? 'center' : 'left'}
            >
              {t('municipalRecordsManager')}
            </Typography>
          </Box>
          <Box paddingX={smDown ? 2 : 3} pt={2}>
            <Typography
              variant="h6"
              align={smDown ? 'center' : 'left'}
              component="div"
            >
              <Box fontWeight="bold">{t('subtitle')}</Box>
            </Typography>
            <Box
              pt={2}
              display={smDown ? 'block' : 'flex'}
              justifyContent="space-around"
            >
              <Box
                borderRadius={2}
                border={`2px solid ${theme.palette.secondary.main}`}
                bgcolor="common.white"
                boxShadow={`0 3px 6px 0 ${theme.extraColors.shadowColor}`}
                paddingY={3}
                width="220px"
                alignItems="center"
                display="flex"
                justifyContent="center"
                margin={smDown ? 'auto' : 'none'}
              >
                <Typography align="center" variant="body1">
                  {t('firstBulletPoint')}
                </Typography>
              </Box>
              <Box
                borderRadius={2}
                border={`2px solid ${theme.palette.secondary.main}`}
                bgcolor="common.white"
                paddingY={3}
                paddingX={2}
                boxShadow={`0 3px 6px 0 ${theme.extraColors.shadowColor}`}
                width="220px"
                alignItems="center"
                display="flex"
                justifyContent="center"
                margin={smDown ? 'auto' : 'none'}
                mt={smDown ? 2 : 0}
              >
                <Typography align="center" variant="body1">
                  {t('secondBulletPoint')}
                </Typography>
              </Box>
              <Box
                borderRadius={2}
                border={`2px solid ${theme.palette.secondary.main}`}
                bgcolor="common.white"
                paddingY={3}
                width="220px"
                boxShadow={`0 3px 6px 0 ${theme.extraColors.shadowColor}`}
                alignItems="center"
                display="flex"
                justifyContent="center"
                margin={smDown ? 'auto' : 'none'}
                mt={smDown ? 2 : 0}
              >
                <Typography align="center" variant="body1">
                  {t('thirdBulletPoint')}
                </Typography>
              </Box>
            </Box>
          </Box>
          {mdUp && (
            <Box position="absolute" width="100%" bottom={0}>
              <Box justifyContent="end" display="flex">
                <img src="images/bg-constancias.png" alt="background image" />
              </Box>
            </Box>
          )}
        </Box>
      </Grid>
      <Grid item xs={12} md={5} className={classes.gridHeight}>
        <Box
          bgcolor={theme.palette.grey[300]}
          paddingX={smDown ? 2 : 0}
          height="100%"
        >
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <Box pt={7}>
                <Typography variant="h6" fontWeight="bold">
                  {t('enterInformationRequestDigitalCertificate')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
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
                <Grid container justifyContent="center">
                  <Grid item xs={12} md={10}>
                    <Box pt={3}>
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
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Box pt={3}>
                      <Typography variant="subtitle1">{t('email')}</Typography>
                    </Box>
                    <Field
                      id="email"
                      name="email"
                      error={!!(touched.email && errors.email)}
                      helperText={touched.email && t(errors.email || '')}
                      as={BaseTextField}
                    />
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <Box pt={3}>
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
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Box pt={8} pb={2} textAlign="center">
                      <BaseButton
                        variant="contained"
                        type="submit"
                        color="primary"
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
