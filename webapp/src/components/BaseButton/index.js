import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const BaseButton = props => {
  const classes = useStyles()

  return (
    <Button
      variant="contained"
      size="large"
      color="secondary"
      className={classes.button}
      {...props}
    />
  )
}

BaseButton.propTypes = {
  props: PropTypes.any
}

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: `48px !important`,
    padding: `${theme.spacing(1, 5)} !important`,
    fontSize: '14px !important'
  }
}))

export default BaseButton
