const styles = theme => ({
  biggerChart: {
    boxShadow: '0px 0px 4px rgba(0,0,0,20)',
    flexBasis: '66%',
    background: '#FFF',
    marginTop: 15,
  },
  chart: {
    marginTop: 15,
    boxShadow: '0px 0px 4px rgba(0,0,0,20)',
    flexBasis: '48%',
    background: '#FFF',
  },
  chartContainer: {
    marginTop: 10,
  },
  chartTitle: {
    minHeight: 48,
    boxShadow: '0px 0px 6px rgba(0,0,0,20)',
    flexBasis: '48%',
    background: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    fontWeight: 'bolder',
    textAlign: 'center',
    color: theme.palette.text.primary,
    textShadow: ' 0px 1px #547086',
  },
  fullWidthChart: {
    width: '90%',
    margin: 'auto',
    minWidth: 300,
  },
  negative: {
    background: '#7394d2',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#FFF',
  },

  positive: {
    background: '#D53A35',
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#FFF',
  },
  positiveNegativeContainer: {
    width: '90%',
    margin: 'auto',
    minWidth: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    boxShadow: '0px 0px 6px rgba(0,0,0,20)',
  },
  skeletonContainer: {
    width: '90',
    margin: 'auto',
  },
  statsContainer: {
    paddingBottom: 100,
  },
});

export default styles;
