import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Link, Typography } from '@mui/material'

import { BaseButton } from '../../components'

const Thanks = () => {
  const { t } = useTranslation('thanksRoute')

  return (
    <Box height="100%" width="100%" display="flex">
      <Box margin="auto" textAlign="center">
        <Grid container justifyContent="center">
          <Grid item md={10}>
            <img src="icons/check-icon.png" />
            <Box pt={4}>
              <Typography variant="h5">{t('thanksMessageTitle')}</Typography>
            </Box>
            <Box pt={3}>
              <Typography variant="body1">{t('thanksMessageDesc')}</Typography>
              <Typography variant="body1">{t('thanksMessageDesc2')}</Typography>
            </Box>
          </Grid>
          <Grid md={3}>
            <Box pt={5}>
              <Link underline="none" href="/">
                <BaseButton variant="outlined" color="primary">
                  {t('requestAnotherProof')}
                </BaseButton>
              </Link>
            </Box>
          </Grid>
          <Grid md={3}>
            <Box pt={5}>
              <Link underline="none" href="https://muniorotina.go.cr/">
                <BaseButton variant="contained" color="primary">
                  {t('returnSite')}
                </BaseButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default memo(Thanks)
