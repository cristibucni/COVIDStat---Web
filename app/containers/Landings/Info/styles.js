const styles = theme => ({
  bodyContainer: {
    flexBasis: 600,
  },
  doubleBodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: 600,
    flexBasis: 550,
  },
  doubleImage: {
    marginTop: 40,
    maxWidth: 800,
    width: '100%',
    margin: 'auto',
    marginBottom: 40,
  },
  doubleTextContainer: {
    display: 'flex',
    maxWidth: 1280,
    margin: '0 auto',
    marginTop: '80px',
    justifyContent: 'space-between',
    padding: 20,
  },
  doubleTextContent: {
    marginTop: 20,
    textIndent: '20px',
  },
  image: {
    width: '100%',
  },
  imageContainer: {
    flexBasis: 500,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  },
  infoContainer: {
    display: 'flex',
    maxWidth: 1280,
    margin: '0 auto',
    marginTop: '80px',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 20,
  },
  reversed: {
    flexDirection: 'row-reverse',
  },
  textContainer: {
    marginTop: 20,
    textIndent: '20px',
    flexBasis: 600,
    textAlign: 'justify',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bolder',
  },
});

export default styles;
