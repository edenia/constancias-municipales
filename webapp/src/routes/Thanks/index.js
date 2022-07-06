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
                <Box pt={8} pb={3} paddingX={35}>
                  <Typography variant="h4" fontWeight="bold">
                    {t('thanksMessageTitle')}
                  </Typography>
                </Box>
                <Box
                  bgcolor="secondary.main"
                  margin="auto"
                  width="30%"
                  height="5px"
                  borderRadius={4}
                />
                <Box pt={4}>
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
                    <BaseButton variant="contained" color="primary">
                      {t('requestAnotherProof')}
                    </BaseButton>
                  </Link>
                </Box>
              </Grid>
              <Grid md={3}>
                <Box pt={5}>
                  <Link underline="none" href={mainConfig.urlOrganization}>
                    <BaseButton variant="outlined" color="secondary">
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
