import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'

import { BaseButton } from '../../components'
import { mainConfig } from '../../config'

const Thanks = () => {
  const theme = useTheme()
  const { t } = useTranslation('thanksRoute')
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box position="relative">
      <Box zIndex={0} position="absolute" width="100%">
        <img
          width="100%"
          height={typeof window !== 'undefined' ? window.innerHeight - 120 : 0}
          src="images/thanks-bg-image.png"
          alt="Header"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        zIndex={2}
        px={smDown ? 2 : 0}
      >
        <Box height="100%" width="100%" display="flex">
          <Box margin="auto" textAlign="center">
            <Grid container justifyContent="center">
              <Grid item md={10}>
                <img src="icons/check-icon.png" />
                <Box pt={4}>
                  <Typography variant="h5">
                    {t('thanksMessageTitle')}
                  </Typography>
                </Box>
                <Box pt={3}>
                  <Typography variant="body1">
                    {t('thanksMessageDesc')}
                  </Typography>
                  <Typography variant="body1">
                    {t('thanksMessageDesc2')}
                  </Typography>
                </Box>
              </Grid>
              <Grid md={3}>
                <Box pt={5}>
                  <Link underline="none" href="/">
                    <BaseButton variant="outlined" color="secondary">
                      {t('requestAnotherProof')}
                    </BaseButton>
                  </Link>
                </Box>
              </Grid>
              <Grid md={3}>
                <Box pt={5}>
                  <Link underline="none" href={mainConfig.urlOrganization}>
                    <BaseButton variant="contained" color="primary">
                      {t('returnSite')}
                    </BaseButton>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(Thanks)
