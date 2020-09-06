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
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const INITIAL_STATE = {
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    padding: 10,
    background: "grey"
  },
  media: {
    height: 350,
  },
});

const LearnCard = (props) => {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
        <div style={{display:"flex"}}>
          <Avatar src={props.src} style={{marginRight: 15, width: 50, height: 50}} />
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          </div>
          <Rating name="read-only" value={props.value} readOnly />
          <br></br><br></br>
          <Typography variant="body2" color="white" component="p">
            {props.desc}
          </Typography>
          <br></br>
          <Chip icon={props.icon} label={props.label} size="large" />
          <Chip icon={props.icon2} label={props.label2} size="large" />

        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button size="small">
          Contact
        </Button>
        <Button size="small">
          View Schedule
        </Button>
      </CardActions>
    </Card>

  )
}

export default LearnCard;