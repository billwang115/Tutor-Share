import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LearnIcon from '@material-ui/icons/LocalLibrary';
import TeachIcon from '@material-ui/icons/WbIncandescent';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    }
  });

const SimpleBottomNavigation = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction onClick={props.first} label="Learn" icon={<LearnIcon />} />
      <BottomNavigationAction onClick={props.second} label="Teach" icon={<TeachIcon />} />
      <BottomNavigationAction onClick={props.third} label="Profile" icon={<ProfileIcon />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation