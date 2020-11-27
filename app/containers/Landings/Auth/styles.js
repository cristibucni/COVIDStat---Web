const img = require('../../../images/utils/background.png');
const styles = () => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundImage: `url(${img})`,
    backgroundPosition: 'bottom',
    height: '81.5vh',
    backgroundRepeat: 'repeat',
    alignItems: 'center',
    minHeight: 300,
  },
  landingPaper: {
    background: '#FFF',
    padding: '12px 48px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '4px 3px 8px -4px rgba(0,0,0,0.75)',
    display: 'flex',
    height: '300px',
    borderRadius: '5px',
    flexDirection: 'column',
  },
});

export default styles;
