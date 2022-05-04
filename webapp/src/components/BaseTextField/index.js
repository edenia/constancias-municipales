import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { TextField } from '@mui/material'

const BaseTextField = ({ ...props }) => {
  const classes = useStyles()

  return (
    <TextField
      variant="filled"
      margin="dense"
      fullWidth
      className={classes.textField}
      autoComplete="off"
      {...props}
    />
  )
}

BaseTextField.propTypes = {
  props: PropTypes.any
}

const useStyles = makeStyles(theme => ({
  textField: {
    backgroundColor: theme.palette.primary.light
  }
}))

export default BaseTextField
