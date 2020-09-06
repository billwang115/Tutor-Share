import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
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

const ProfileCard = (props) => {

  const classes = useStyles();
  const [desc, setDesc] = useState(props.desc)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
        <div style={{display:"flex"}}>
          <Avatar src={props.src} style={{marginRight: 25, width: 50, height: 50}} />
          <Typography gutterBottom variant="h5" value="slatt" component="h2"> {props.title} </Typography>
          </div>
          <br></br><br></br>
          <TextField value={desc} style={{marginBottom: 10}} onChange={(e)=>setDesc(e.target.value)}> </TextField>

          <br></br>
          <div>
            <Chip icon={props.icon} label={props.label} style={{marginRight: 5, marginBottom:10, width: 200, height: 35}}/>
            <Chip icon={props.icon2} label={props.label2} style={{marginRight: 5, marginBottom:10, width: 200, height: 35}}/>
            <Chip icon={props.icon3} label={props.label3} style={{width: 200, height: 35}}/>
          </div>

        </CardContent>

      </CardActionArea>
      <CardActions>
        <Button size="small">
          Save
        </Button>
      </CardActions>
    </Card>

  )
}

export default ProfileCard;
