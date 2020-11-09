const styles = theme => ({
  button: {
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    margin: '0 auto',
    marginTop: 'auto',
    textTransform: 'none',
    width: '40%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  formControl: {
    marginBottom: '23px',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '14px',
  },
});

export default styles;
