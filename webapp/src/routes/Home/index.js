import React, { memo, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { useTranslation } from 'react-i18next'
import InputMask from 'react-input-mask'
import { Box, Grid, Typography, Snackbar, MenuItem } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MuiAlert from '@mui/lab/Alert'

import { BaseTextField, BaseButton } from '../../components'
import { requestProofSchema } from '../../schemas'

import styles from './styles'

const useStyles = makeStyles(styles)
const { defaultValues, schema } = requestProofSchema
const idOptions = [
  'nationalNaturalPersonIdentityCard',
  'legalEntityIdentificationNumber',
  'certificateResidence',
  'passportNumber'
]

const Home = () => {
  const classes = useStyles()
  const { t } = useTranslation('homeRoute')
  const [activeCongrats, setActiveCongrats] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [showMessage, setShowMessage] = useState({
    open: false,
    message: '',
    severity: ''
  })

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  // const { loading, error } = useFetch({
  //   onCompleted: () => {
  //     setSucceeded(true)
  //   }
  // })

  // const onCloseSnackBar = useCallback((event, reason) => {
  //   if (reason === 'clickaway') {
  //     return
  //   }
  //   setSucceeded(false)
  // }, [])

  const handleCloseMessage = () => {
    setShowMessage({ ...showMessage, open: false })
  }

  const getMaskType = type => {
    switch (type) {
      case 'legalEntityIdentificationNumber':
        return '9-999-999999'
      case 'certificateResidence':
        return '9-9999-999'
      case 'passportNumber':
        return '9-9999-99999'
      default:
        return '9-9999-9999'
    }
  }

  const isEmailMatch = ({ email, check, errors }) => {
    console.log({ email, check })
    if (email !== check || !!errors.retypeEmailAddress) return true

    return false
  }

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
        {!activeCongrats ? (
          <Formik
            enableReinitialize
            initialValues={defaultValues}
            validationSchema={schema}
            onSubmit={async ({ propertyNumber, email }, formikHelpers) => {
              try {
                if (propertyNumber === '330033') {
                  alert('Su solicitud ha sido enviada con éxito.')
                  setEmailValue(email)
                  setActiveCongrats(true)
                }
                // setShowMessage({
                //   ...showMessage,
                //   open: true,
                //   message: 'Su solicitud ha sido enviada con éxito.',
                //   severity: 'success'
                // })
                else {
                  alert('Número de finca invalido')
                  // setShowMessage({
                  //   ...showMessage,
                  //   open: true,
                  //   message: 'Número de finca invalido',
                  //   severity: 'error'
                  // })
                }
                // formikHelpers.resetForm()
              } catch (error) {
                console.error(error)
              }
            }}
          >
            {({ errors, touched, handleChange, values }) => (
              <Form>
                {console.log({ values })}
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
                      <Typography variant="subtitle1">
                        {t('idNumber')}
                      </Typography>
                    </Box>
                    <Field
                      id="idNumber"
                      name="idNumber"
                      // component={BaseTextField}
                      render={({ field: { name, value } }) => (
                        // <Box className={classes.divTextFile}>
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

                        // </Box>
                      )}
                    />
                  </Grid>
                  {console.log({ classes })}
                  <Grid item xs={12} md={5}>
                    <Box pt={2}>
                      <Typography variant="subtitle1">{t('email')}</Typography>
                    </Box>
                    <Field
                      id="email"
                      name="email"
                      // className={classes.borderField}
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
                    {console.log(!!touched.retypeEmailAddress)}
                    {console.log(
                      isEmailMatch({
                        email: values.email,
                        check: values.retypeEmailAddress,
                        errors
                      })
                    )}
                    <Field
                      id="retypeEmailAddress"
                      name="retypeEmailAddress"
                      // className={classes.borderField}
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
                        t(errors.retypeEmailAddress || '')
                      }
                      as={BaseTextField}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Box pt={3} textAlign="center">
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
        ) : (
          <Box pt={6}>
            <Typography variant="h5">
              La solicitud se está procesando, su constancia será enviada a la
              dirección electrónica {emailValue}
            </Typography>
          </Box>
        )}
        <Snackbar
          autoHideDuration={4000}
          open={showMessage.open}
          onClose={handleCloseMessage}
        >
          <Alert onClose={handleCloseMessage} severity={showMessage.severity}>
            {showMessage.message}
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  )
}

Home.propTypes = {}

export default memo(Home)
