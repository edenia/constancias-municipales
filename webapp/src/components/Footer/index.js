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
    <Box className={classes.root} zIndex={2}>
      <Grid container>
        <Grid item xs={12} justifyContent="center">
          <Typography align="center" variant="body2">
            {t('thanks')}:
          </Typography>
          <Box width="100%" display="flex" justifyContent="center">
            <Link href="https://cr.usembassy.gov/es/">
              <img
                width={145}
                src="logos/embajada-usa-logo.png"
                alt="Embajada usa logo"
              />
            </Link>
          </Box>
          <Typography align="center" variant="body2">
            © {new Date().getFullYear()} {mainConfig.organizationName}.{' '}
            {t('copy')}
            <Link
              underline="hover"
              color="secondary"
              href="https://edenia.com/es"
              fontWeight="bold"
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
