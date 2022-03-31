import React, { Suspense, useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { StylesProvider, createGenerateClassName } from '@mui/styles'

import './i18n'
import routes from './routes'
import getTheme from './theme'
import { reCaptchaConfig } from './config'
import Loader from './components/Loader'
import DashboardLayout from './layouts/Dashboard'
import { useSharedState } from './context/state.context'

const generateClassName = createGenerateClassName({
  productionPrefix: 'fullStack' // Change it for prefix project name.
})

const App = () => {
  const [state] = useSharedState()

  const renderRoute = ({ component: Component, ...route }, index) => (
    <Route
      key={`path-${route.path}-${index}`}
      path={route.path}
      exact={route.exact}
      element={<Component />}
    />
  )

  const userRoutes = useMemo(
    () => routes(state.user?.role || 'guest'),

    [state.user]
  )

  const theme = useMemo(() => getTheme(state.useDarkMode), [state.useDarkMode])

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <GoogleReCaptchaProvider
              reCaptchaKey={reCaptchaConfig.key}
              useEnterprise={true}
            >
              <DashboardLayout routes={userRoutes.sidebar}>
                <Suspense fallback={<Loader />}>
                  <Routes>{userRoutes.browser.map(renderRoute)}</Routes>
                </Suspense>
              </DashboardLayout>
            </GoogleReCaptchaProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  )
}

export default App
