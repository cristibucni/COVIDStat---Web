const styles = theme => ({
  appBar: {
    height: '8vh',
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    color:'inherit'
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
  },
  title: {
    flexGrow: 1,
    paddingLeft: '8px',
    marginTop: '6px',
  }
});

export default styles;
