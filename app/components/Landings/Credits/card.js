import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, Typography, withStyles } from '@material-ui/core';
import styles from 'containers/Private/Credits/styles';

const MemberCard = props => {
  const { member, classes } = props;
  return (
    <Grid item xs={11} sm={4} md={2} className={classes.root}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {member.name[0]}
            </Avatar>
          }
          title={member.name}
        />
        <CardMedia className={classes.media} image={member.image} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {member.job}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

MemberCard.propTypes = {
  classes: PropTypes.object.isRequired,
  member: PropTypes.object.isRequired,
};

export default withStyles(theme => styles(theme))(MemberCard);
