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
    borderRadius: 4,
    padding: theme.spacing(1, 3),
    fontSize: '16px',
    fontWeight: 'bold'
  }
}))

export default BaseButton
