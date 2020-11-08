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

const styles = theme => ({
  marginTopAuto: {
    marginTop: 'auto',
  },
});

export default styles;
