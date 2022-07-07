export default theme => ({
  gridHeight: {
    [theme.breakpoints.up('md')]: {
      height: '100%'
    }
  },
  boxHeaderStyle: {
    borderBottom: `solid 3px ${theme.palette.secondary.main}`,
    borderRadius: '0 0 0 40px',
    [theme.breakpoints.down('sm')]: {
      borderRadius: '0 0 30px 30px'
    }
  }
})
