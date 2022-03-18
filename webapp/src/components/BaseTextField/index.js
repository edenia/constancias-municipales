import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

const BaseTextField = ({ ...props }) => {
  return (
    <TextField
      variant="filled"
      margin="dense"
      fullWidth
      autoComplete="off"
      {...props}
    />
  )
}

BaseTextField.propTypes = {
  props: PropTypes.any
}

export default BaseTextField
