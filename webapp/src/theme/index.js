import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import { extraColors, palette } from './palette'
import breakpoints from './breakpoints'
import typography from './typography'

export default useDarkMode =>
  responsiveFontSizes(
    createTheme({
      breakpoints,
      typography,
      palette: { mode: useDarkMode ? 'dark' : 'light', ...palette },
      extraColors
    })
  )
