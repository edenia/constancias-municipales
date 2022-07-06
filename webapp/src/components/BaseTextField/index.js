import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { TextField } from '@mui/material'

const BaseTextField = ({ ...props }) => {
  const classes = useStyles()

  return (
    <TextField
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
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    '& .MuiInputBase-input': {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      backgroundColor: theme.palette.common.white,
      borderRadius: 4
    },
    '& .MuiFormHelperText-root': {
      marginTop: theme.spacing(0)
    }
  }
}))

export default BaseTextField
