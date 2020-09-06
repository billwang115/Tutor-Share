import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";
import TeachCards from "./TeachCards";
import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullwidthGrid() {
  const classes = useStyles();

  return (
    <div style={{ overflow:'hidden'}} className={classes.root}>
        <div style={{textAlign:'center', fontFamily:"Raleway"}}>
            <Typography style={{marginTop:25}} variant="h5">Your Students</Typography>
        </div>
        <br/>
        <br/>
      <Grid 
      container spacing={4}
      direction="column"
      justify="space-evenly"
      alignItems="stretch"
      >
        <Grid item xs={12}>
          <TeachCards name="Victor" title="Grade 8" icon= <AppleIcon/> label="IOS Development" size ="large"/>
        </Grid>
        <Grid item xs={12}>
          <TeachCards name="Josh" title="University" icon= <YouTubeIcon/> label="Video Editing" size="large"/>
        </Grid>
        <Grid item xs={12}>
          <TeachCards name="Eric" title="Grade 12" icon= <WebIcon/> label="Web Development" size="large"/>
        </Grid>
        <Grid item xs={12}>
          <TeachCards name="Eric" title="Grade 12" icon= <WebIcon/> label="Web Development" size="large"/>
        </Grid>
      </Grid>
    </div>
  );
}