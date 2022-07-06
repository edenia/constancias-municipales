import React, { memo, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AppBar from '@mui/material/AppBar'
import { useMediaQuery } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LanguageIcon from '@mui/icons-material/Language'
import AccountIcon from '@mui/icons-material/AccountCircle'
import { Sun as SunIcon, Moon as MoonIcon } from 'react-feather'

import { useSharedState } from '../../context/state.context'
import { mainConfig } from '../../config'
import PageTitle from '../PageTitle'

import styles from './styles'

const useStyles = makeStyles(styles)

const SwitchThemeModeButton = memo(({ useDarkMode, onSwitch }) => {
  const { t } = useTranslation('header')
  const smDown = useMediaQuery('(max-width:600px)')

  return (
    <Button
      color={useDarkMode ? 'info' : smDown ? 'primary' : 'info'}
      startIcon={useDarkMode ? <SunIcon /> : <MoonIcon />}
      onClick={() => onSwitch(!useDarkMode)}
    >
      {t(useDarkMode ? 'lightMode' : 'darkMode')}
    </Button>
  )
})

SwitchThemeModeButton.displayName = 'SwitchThemeModeButton'

SwitchThemeModeButton.propTypes = {
  useDarkMode: PropTypes.bool,
  onSwitch: PropTypes.func
}

const LanguageButton = ({ current, onChange }) => {
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null)
  const languages = [
    {
      value: 'en',
      label: 'EN'
    },
    {
      value: 'es',
      label: 'ES'
    }
  ]

  const handleLanguajeMenuOpen = event => {
    setLanguageAnchorEl(event.currentTarget)
  }

  const handleLanguajeMenuClose = language => {
    setLanguageAnchorEl(null)
    typeof language === 'string' && onChange && onChange(language)
  }

  return (
    <>
      <Button
        color="info"
        startIcon={<LanguageIcon />}
        onClick={handleLanguajeMenuOpen}
      >
        {(current || '').toUpperCase()}
      </Button>
      <Menu
        keepMounted
        anchorEl={languageAnchorEl}
        open={!!languageAnchorEl}
        onClose={handleLanguajeMenuClose}
      >
        {languages.map(language => (
          <MenuItem
            key={`language-menu-${language.value}`}
            onClick={() => handleLanguajeMenuClose(language.value)}
          >
            {language.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

LanguageButton.propTypes = {
  current: PropTypes.string,
  onChange: PropTypes.func
}

const UserButton = memo(({ user }) => (
  <>
    {user && (
      <Button color="info" startIcon={<AccountIcon />}>
        {user.accountName}
      </Button>
    )}
  </>
))

UserButton.displayName = 'UserButton'

UserButton.propTypes = {
  user: PropTypes.any
}

const Header = memo(({ onDrawerToggle }) => {
  const classes = useStyles()
  const navigate = useNavigate()
  const { t } = useTranslation('routes')
  const location = useLocation()
  const [state] = useSharedState()
  const { i18n } = useTranslation('translations')
  const [currentLanguaje, setCurrentLanguaje] = useState()
  const [menuAnchorEl, setMenuAnchorEl] = useState()

  const handleChangeLanguage = languaje => i18n.changeLanguage(languaje)

  const handleCloseMenu = () => {
    setMenuAnchorEl(null)
  }

  useEffect(() => {
    setCurrentLanguaje(i18n.language?.substring(0, 2) || 'en')
  }, [i18n.language])

  return (
    <AppBar className={classes.appBar} position="sticky">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.showCursos}>
          <img
            width="100%"
            alt={mainConfig.title}
            src={mainConfig.logo}
            onClick={() => navigate('/')}
          />
        </Box>
        <Typography className={classes.typography} variant="h4">
          {t(`${location.pathname}>heading`, '')}
        </Typography>
        <PageTitle title={t(`${location.pathname}>title`, mainConfig.title)} />
        <Box className={classes.desktopSection}>
          <LanguageButton
            current={currentLanguaje}
            onChange={handleChangeLanguage}
          />
          <UserButton user={state.user} />
        </Box>
      </Toolbar>
      <Menu
        open={!!menuAnchorEl}
        anchorEl={menuAnchorEl}
        onClose={handleCloseMenu}
      >
        <MenuItem>
          <LanguageButton
            current={currentLanguaje}
            onChange={handleChangeLanguage}
          />
        </MenuItem>
        {state.user && (
          <MenuItem>
            <UserButton user={state.user} />
          </MenuItem>
        )}
      </Menu>
    </AppBar>
  )
})

Header.displayName = 'Header'

Header.propTypes = {
  onDrawerToggle: PropTypes.func
}

export default Header
