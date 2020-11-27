import React, { Component } from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Typography, withStyles } from '@material-ui/core';

const Alex = require('images/credits/alex.jpeg');
const Ara = require('images/credits/ara.jpeg');
const Aurelian = require('images/credits/aurelian.jpeg');
const Oana = require('images/credits/oana.jpeg');
const Cristi = require('images/credits/cristi.jpg');

import styles from 'containers/Private/Credits/styles';
import MemberCard from 'components/Landings/Credits/card';

const TEAM = [
  {
    name: 'Alexandru Aldea',
    image: Alex,
    job: '.NET Developer',
  },
  {
    name: 'Arabela Nedelcu',
    image: Ara,
    job: 'SQL Developer',
  },
  {
    name: 'Aurelian Mihai',
    image: Aurelian,
    job: 'React Native Developer',
  },
  {
    name: 'Oana Vezentan',
    image: Oana,
    job: 'Analist proiect',
  },
  {
    name: 'Cristian Bucnaru',
    image: Cristi,
    job: 'React Developer',
  },
];

class Credits extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify={'space-evenly'} className={classes.creditsContainer}>
        {TEAM.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </Grid>
    );
  }
}

Credits.propTypes = {};

export default withStyles(theme => styles(theme))(Credits);
