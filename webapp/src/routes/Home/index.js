import React, { memo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field } from 'formik'
import { useMutation } from '@apollo/client'
import InputMask from 'react-input-mask'
import {
  Box,
  Grid,
  Typography,
  MenuItem,
  CircularProgress
} from '@mui/material'

import { useSharedState } from '../../context/state.context'
import { BaseTextField, BaseButton } from '../../components'
import { requestProofSchema } from '../../schemas'
import { MUTATION_GENERATE_CONSTANCY } from '../../gql'

const { defaultValues, schema } = requestProofSchema
const idOptions = [
  'nationalNaturalPersonIdentityCard',
  'legalEntityIdentificationNumber',
  'certificateResidence',
  'passportNumber'
]

const Home = () => {
  const [showProgressBar, setShowProgressBar] = useState(false)
  const [, { showMessage }] = useSharedState()
  const { t } = useTranslation('homeRoute')
  const [generateConstancy, { error: errorGenerateConstancy }] = useMutation(
    MUTATION_GENERATE_CONSTANCY
  )

  const getMaskType = type => {
    switch (type) {
      case 'legalEntityIdentificationNumber':
        return '9-999-999999'
      case 'certificateResidence':
        return '999999999999'
      case 'passportNumber':
        return '9-9999-99999'
      default:
        return '9-9999-9999'
    }
  }

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
      content: t('InvalidDataMessage')
    })
  }, [errorGenerateConstancy])

  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h4">{t('municipalRecordsManager')}</Typography>
        <Box pt={2} width="50%">
          <Typography variant="h5">{t('subtitle')}</Typography>
        </Box>
        <Box pt={3} pb={4}>
          <Typography variant="body1">{t('infoTitle')}</Typography>
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
              setShowProgressBar(true)
              const isValidData = await generateConstancy({
                variables: {
                  idNumber,
                  email
                }
              })

              if (isValidData?.data?.generate_constancy?.success) {
                showMessage({
                  type: 'success',
                  content: t('requestBeenSentSuccessfully')
                })
                formikHelpers.resetForm()
                // await new Promise(resolve => setTimeout(resolve, 2000))
                // window.location.href = 'http://localhost:3000/thanks'
              } else {
                showMessage({
                  type: 'error',
                  content: t('InvalidDataMessage')
                })
              }
              setShowProgressBar(false)
            } catch (error) {
              console.error(error)
            }
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Grid container justifyContent="space-around">
                <Grid item xs={12} md={5}>
                  <Box pt={2}>
                    <Typography variant="subtitle1">{t('idType')}</Typography>
                  </Box>
                  <Field
                    id="idType"
                    name="idType"
                    as={BaseTextField}
                    select
                    error={!!(touched.idType && errors.idType)}
                    helperText={touched.idType && t(errors.idType || '')}
                  >
                    {idOptions.map(role => {
                      return (
                        <MenuItem key={role} value={role}>
                          {t(role)}
                        </MenuItem>
                      )
                    })}
                  </Field>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box pt={2}>
                    <Typography variant="subtitle1">{t('idNumber')}</Typography>
                  </Box>
                  <Field
                    id="idNumber"
                    name="idNumber"
                    render={({ field: { name, value } }) => (
                      <InputMask
                        mask={getMaskType(values.idType)}
                        value={value}
                        type="text"
                        disabled={false}
                        maskChar=" "
                        onChange={handleChange(name)}
                      >
                        {() => (
                          <BaseTextField
                            error={!!(touched.date && errors.date)}
                          />
                        )}
                      </InputMask>
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box pt={2}>
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
                <Grid item xs={12} md={5}>
                  <Box pt={2}>
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
                <Grid item xs={12} md={3}>
                  <Box pt={3} paddingX={10} display="grid" textAlign="center">
                    <Box margin="auto">
                      {showProgressBar && <CircularProgress />}
                    </Box>
                    <BaseButton
                      variant="contained"
                      type="submit"
                      color="primary"
                      // disabled={loading}
                      fullWidth={false}
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
