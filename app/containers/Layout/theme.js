import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Rubik', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: '#3A517B',
    },
    secondary: {
      main: '#8de386',
    },
    text: {
      primary: '#334b49',
      secondary: '#ede9d0',
    },
  },
});

export default theme;
