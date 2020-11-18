const background = require('../../../images/utils/footer.png');
const styles = theme => ({
  appBar: {
    height: '8vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: '100%',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  list: {
    width: '13vw',
    minWidth: 250,
  },
  listItem: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    flexGrow: 1,
    maxHeight: '8vh',
  },
  title: {
    flexGrow: 1,
    paddingLeft: '8px',
  },
  icon: {
    fontSize: '28px',
  },
});

export default styles;
