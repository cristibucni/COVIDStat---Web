import green from '@material-ui/core/colors/green';

const img = require('images/utils/background.png');
const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.text.secondary,
  },
  creditsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    maxWidth: '100%',
    margin: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  media: {
    height: 500,
    paddingTop: '56.25%', // 16:9
  },
  root: {
    flexBasis: 500,
    width:'100%',
    margin: '10px 0'
  },
});

export default styles;
