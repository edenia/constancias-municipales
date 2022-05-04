import React, { memo } from 'react'
import { makeStyles } from '@mui/styles'
import { useTranslation } from 'react-i18next'
import { Typography, Grid, Box, Link } from '@mui/material'

import { mainConfig } from '../../config'

import styles from './styles'

const useStyles = makeStyles(styles)

const Footer = () => {
  const { t } = useTranslation('footer')
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="center" variant="body1">
            © 2022 {mainConfig.organizationName}. {t('copy')}
            <Link
              underline="hover"
              color="secondary"
              href="https://edenia.com/es"
            >
              {' '}
              Edenia
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default memo(Footer)
