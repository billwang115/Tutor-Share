import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: "grey"
  },
  bullet: {
    display: 'inline-block',
    margin: '0',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
            <Chip icon={props.icon} label={props.label} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Contact</Button>
        <Button size="small">View Schedule</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;