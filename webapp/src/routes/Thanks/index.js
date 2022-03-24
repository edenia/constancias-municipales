import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Grid, Typography } from '@mui/material'

import { BaseButton } from '../../components'

const Thanks = () => {
  const { t } = useTranslation('thanksRoute')

  return (
    <Grid container>
      <Grid item md={12}>
        <Box pt={6}>
          <Typography variant="h5">{t('thanksMessageTitle')}</Typography>
        </Box>
        <Box pt={3}>
          <Typography variant="body1">{t('thanksMessageDesc')}</Typography>
          <Typography variant="body1">{t('thanksMessageDesc2')}</Typography>
        </Box>
      </Grid>
      <Grid md={3}>
        <BaseButton variant="outlined" color="primary">
          {t('requestAnotherProof')}
        </BaseButton>
      </Grid>
      <Grid md={3}>
        <BaseButton variant="contained" color="primary">
          {t('returnSite')}
        </BaseButton>
      </Grid>
    </Grid>
  )
}

Thanks.propTypes = {}

export default memo(Thanks)
