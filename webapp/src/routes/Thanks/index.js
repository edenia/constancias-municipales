import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Link, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/styles'

import { BaseButton } from '../../components'
import { mainConfig } from '../../config'

const Thanks = () => {
  const theme = useTheme()
  const { t } = useTranslation('thanksRoute')
  const mdUp = useMediaQuery(theme.breakpoints.up('md'))
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box position="relative" height="100%">
      <Box
        display="flex"
        alignItems="center"
        position="relative"
        px={mdUp ? 0 : 2}
      >
        <Box height="100%" width="100%" display="flex">
          <Box margin="auto" textAlign="center">
            <Grid container justifyContent="center">
              <Grid item md={10}>
                <Box pt={8} pb={smDown ? 2 : 3} paddingX={mdUp ? 35 : 0}>
                  <Typography variant="h4" fontWeight="bold">
                    {t('thanksMessageTitle')}
                  </Typography>
                </Box>
                <Box
                  bgcolor="secondary.main"
                  margin="auto"
                  width={!mdUp ? '60%' : '30%'}
                  height="6px"
                  borderRadius={4}
                />
                <Box pt={4} textAlign={smDown ? 'left' : 'center'}>
                  <Typography variant="body1">
                    {t('thanksMessageDesc')}
                  </Typography>
                  <Box pt={2}>
                    <Typography variant="body1">
                      {t('thanksMessageDesc2')}
                    </Typography>
                  </Box>
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
                <Box pt={smDown ? 2 : 5}>
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
      {!smDown && (
        <Box position="absolute" width="100%" bottom={0} zIndex={-1}>
          <Box justifyContent="end" display="flex">
            <img
              src="images/bg-constancias-thanks.png"
              alt="background image"
            />
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default memo(Thanks)
