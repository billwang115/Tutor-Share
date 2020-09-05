import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const INITIAL_STATE = {
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    padding: 10
  },
  media: {
    height: "100%",
  },
});

const LearnCard = (props) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={props.image}
        />
        <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>

          <Rating name="read-only" value={props.value} readOnly />

          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>

        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact
        </Button>
      </CardActions>
    </Card>
  )
}

export default LearnCard;
