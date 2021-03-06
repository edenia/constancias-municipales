export default theme => ({
  appBar: {
    backgroundColor: `${theme.palette.background.paper}`,
    boxShadow: `${theme.shadows[0]}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.up('md')]: {
      boxShadow: `${theme.shadows[4]}`,
      borderBottom: 0
    }
  },
  toolbar: {
    padding: 0,
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(0, 2)}`
    }
  },
  typography: {
    color: `${theme.palette.text.primary}`,
    flexGrow: 1
  },
  desktopSection: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 'auto',
    display: 'flex'
  },
  mobileSection: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  colorIcon: {
    color: `${theme.palette.common.white} !important`
  },
  showCursos: {
    cursor: 'pointer',
    width: 150
  }
})
