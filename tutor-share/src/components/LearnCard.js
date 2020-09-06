import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
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
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Alert from '@material-ui/lab/Alert';

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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBooked(true)
  };

  const[selected, setSelected] = React.useState(false)

  const[booked, setBooked] = React.useState(false)

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
        <div style={{display:"flex"}}>
          <Avatar src={props.src} style={{marginRight: 15, width: 50, height: 50}} />
          <Grid container justify="space-between">
            <Typography gutterBottom variant="h5" component="h2"> {props.title} </Typography>
            <Rating name="read-only" value={props.value} readOnly />
          </Grid>
          </div>
          <br></br><br></br>
          <Typography variant="body2" color="white" component="p"> {props.desc} </Typography>
          <br></br>
          <div style={{display:"flex"}}>
            <Chip icon={props.icon} label={props.label} style={{marginRight: 5, width: 200, height: 35}}/>
            <Chip icon={props.icon2} label={props.label2}  style={{width: 200, height: 35}}/>
          </div>

        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button size="small">
          Contact
        </Button>
        <Button size="small" onClick={handleOpen}>
          View Schedule
        </Button>
      </CardActions>
    </Card>

<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
<div style={{width: '80%', position: 'fixed', top: '20%', left: '10%', backgroundColor: 'grey',}}>
<div style={{margin: 25}}>
  <h2 style={{textAlign: 'center'}}>Bluewan's schedule</h2>
  <React.Fragment>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography color="textSecondary">Tomorrow</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color=''/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography color="textSecondary">9:30 AM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography >4:00 PM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color=''/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>9/10</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem onClick={()=>setSelected(true)}>
          <TimelineOppositeContent>
            <Typography color={selected? "primary" : ''}>9/12</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={selected? "primary" : ''} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography color={selected? "primary" : ''}>1:30 PM</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography>4:00 PM</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='' />
          </TimelineSeparator>
          <TimelineContent>
            <Typography>9/12</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
      <div style={{textAlign: 'center'}}>
    <Button disabled={!selected} onClick={handleClose} color="primary" disableElevation variant="contained">Book</Button>
    </div>
  </div>
  </div>
</Modal>

{booked &&
<Alert style={{margin: 'auto', width: '80%'}} severity="success">
  Successfully booked!
</Alert>
}
    </>
  )
}

export default LearnCard;
