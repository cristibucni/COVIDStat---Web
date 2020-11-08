import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ED8910',
    },
    secondary: {
      main: green[500],
    },
  },
});

const styles = () => ({
  current: {
    color: '#ED8910',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  breadcrumbs: {
    cursor: 'pointer',
  },
  marginTopAuto: {
    marginTop: 'auto',
  },
});

export default styles;
