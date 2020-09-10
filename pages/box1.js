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

export default function MediaCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://t3.ftcdn.net/jpg/01/90/18/42/240_F_190184240_PhMJavFInMu0jW2ebj7BNEdN33cbF9sV.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            Online Pharmacy
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
