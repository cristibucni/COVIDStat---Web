const background = require('images/utils/footer.png');
const styles = theme => ({
  footer: {
    marginTop: 'auto',
    height: '100px',
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${background})`,
    backgroundPosition:'center'
  },
  logo: {
    fontSize: '34px',
  },
  credits: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    fontWeight: 'bolder',
    fontSize: '20px',
    lineHeight: '22px',
  },
});
export default styles;
