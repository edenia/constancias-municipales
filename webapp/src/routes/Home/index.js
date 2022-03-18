import React, { memo, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Typography, Snackbar } from '@mui/material'
import MuiAlert from '@mui/lab/Alert'

import { BaseTextField, BaseButton } from '../../components'
import { requestProofSchema } from '../../schemas'

const { defaultValues, schema } = requestProofSchema

const Home = () => {
  // const [succeeded, setSucceeded] = useState(false)
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

  return (
    <Grid container>
      {/* <BaseSnackbar
        snackbarProps={{
          open: succeeded,
          onClose: onCloseSnackBar
        }}
        alertProps={{
          severity: 'success'
        }}
        message={t('sentSuccessfully')}
      />

      <BaseSnackbar
        snackbarProps={{
          open: !!error
        }}
        message={error ?? undefined}
      /> */}
      <Grid item md={12}>
        <Typography variant="h4">{t('municipalRecordsManager')}</Typography>
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
            {({ errors, touched }) => (
              <Form>
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <Box pt={2}>
                      <Typography variant="subtitle1">
                        {t('propertyNumber')}
                      </Typography>
                    </Box>
                    <Field
                      id="propertyNumber"
                      name="propertyNumber"
                      // className={classes.borderField}
                      error={!!(touched.name && errors.name)}
                      helperText={touched.name && t(errors.name || '')}
                      as={BaseTextField}
                      label={t('propertyNumber')}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
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
                      label={t('email')}
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
