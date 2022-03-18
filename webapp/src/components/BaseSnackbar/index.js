import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar, Alert } from '@mui/material'

const BaseSnackbar = ({ snackbarProps, alertProps, message }) => {
  return (
    <Snackbar autoHideDuration={6000} {...snackbarProps}>
      <Alert elevation={6} variant="filled" severity="error" {...alertProps}>
        {typeof message === 'object' ? JSON.stringify(message) : message}
      </Alert>
    </Snackbar>
  )
}

BaseSnackbar.propTypes = {
  snackbarProps: PropTypes.any,
  alertProps: PropTypes.any,
  message: PropTypes.any
}

export default BaseSnackbar
