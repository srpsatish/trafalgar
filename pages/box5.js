import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard5() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://t4.ftcdn.net/jpg/03/16/53/91/240_F_316539133_UTp5lI1pVgA7mG6ApbRaCb4iSzhKvYcF.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Tracking
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </CardContent>
        <br></br>
        <br></br>
      </CardActionArea>
    </Card>
  );
}
