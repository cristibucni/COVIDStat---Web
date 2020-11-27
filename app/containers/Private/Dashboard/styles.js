const styles = theme => ({
  card: {
    '&:hover': {
      background: 'rgba(105,102,102,0.1)',
    },
    alignItems: 'center',
    background: 'white',
    boxShadow: '4px 3px 8px -4px rgba(0,0,0,0.75)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '220px',
    justifyContent: 'center',
    margin: '8px',
    transition: 'all 0.4s',
    width: '220px',
  },
  cardIcon: {
    fontSize: '45px',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '32px',
    justifyContent:'center'
  },
  cardText: {
    fontSize: '25px',
    lineHeight: '27px',
    marginTop: '16px',
  },
  container: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '1180px',
    paddingTop: '55px',
    width: '100%',
  },
  input: {
    fontSize: '24px',
    width: '80%',
  },
  inputIcon: {
    fontSize: '32px',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

export default styles;
