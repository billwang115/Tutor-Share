import React from 'react';
import ProfileCard from './ProfileCard';
import Lessons from './Lessons';
import AppleIcon from '@material-ui/icons/Apple';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';

const INITIAL_STATE = {
}

class Profile extends React.Component {

  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  render() {
  return (
    <div style={{marginBottom: 80, marginTop: 50}}>

      <ProfileCard
        title="Victor"
        desc="Slat"
        icon=<AppleIcon />
        label="iOS development"
        icon2=<YouTubeIcon />
        label2="Video Editing"
        icon3=<CodeIcon />
        label3="Web Development"
        src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/118812307_369646424068062_3732024978468783710_n.jpg?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=xLXLh2-mQh8AX_0BmkT&_nc_ht=scontent.fybz2-2.fna&oh=18b7b94f68c5e244c2a1aed2dc5218ed&oe=5F77C78D"
      />
      <br></br>

      <Lessons/>

    </div>
  );
}
}

export default Profile;
