import React from 'react';
import LearnCard from './LearnCard'
import ExposureIcon from '@material-ui/icons/Exposure';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AppleIcon from '@material-ui/icons/Apple';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import RouterIcon from '@material-ui/icons/Router';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import AdbIcon from '@material-ui/icons/Adb';
import CodeIcon from '@material-ui/icons/Code';
import LearnSearchBar from './LearnSearchBar'
import Typography from '@material-ui/core/Typography';

const INITIAL_STATE = {
  cards: [{
    title: 'lol',
    desc:'sdlf',
    value: Math.floor(Math.random() * 5) + 1,
    src:'https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/118812307_369646424068062_3732024978468783710_n.jpg?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=xLXLh2-mQh8AX_0BmkT&_nc_ht=scontent.fybz2-2.fna&oh=18b7b94f68c5e244c2a1aed2dc5218ed&oe=5F77C78D',

  }]
}

class Learn extends React.Component {

  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  render() {
  return (
        <>
        <LearnSearchBar/>
    <div style={{ width:'100%', position: 'fixed', height: '100%' , top:'100px', padding: '0px', overflow: 'scroll', marginBottom:80}}>
    <div style={{width:'100%', margin: 'auto',  marginBottom:150, overflow: 'auto'}}>
        <div style={{ overflow:'hidden'}}>
            <div style={{textAlign:'center', fontFamily:"Raleway"}}>
                <Typography variant="h5">Recommended Tutors</Typography>
            </div>
        </div>
        <br/>
      <LearnCard
      title="Steph"
      desc="Passionate computer science student, I love programming in iOS"
      value="3"
      icon=<AppleIcon />
      label="iOS development"
      icon2=<CodeIcon />
      label2="Programming"
      src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/118812307_369646424068062_3732024978468783710_n.jpg?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=xLXLh2-mQh8AX_0BmkT&_nc_ht=scontent.fybz2-2.fna&oh=18b7b94f68c5e244c2a1aed2dc5218ed&oe=5F77C78D"
      />

      <br></br>

      <LearnCard
      title="Bluewan"
      desc="Hello I am bluewan"
      value="5"
      icon=<AccountBalanceIcon />
      label="Finance"
      icon2=<CodeIcon />
      label2="Programming"
      src="https://scontent.fybz2-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/118770349_785394025601999_7737507424071339358_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=kZzn6WgEflQAX97A0IS&_nc_ht=scontent.fybz2-1.fna&oh=e54b016c57c49f8c806a198c99b8d307&oe=5F79EAAD"
      />

      <br></br>

      <LearnCard
      title="Arman"
      desc="Hello I am arman"
      value="3"
      icon=<AppleIcon />
      label="iOS development"
      icon2=<AdbIcon />
      label2="Android development"
      src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/118787909_352238676153162_3918645035166570359_n.jpg?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=N-2BFmFVwoIAX8dcqHb&_nc_ht=scontent.fybz2-2.fna&oh=a310abecf1ad2543c7c8f660cee34e76&oe=5F77CEA7"
      />

      <br></br>

      <LearnCard
      title="Billiam"
      desc="Hello i am bill"
      value="3"
      icon={ExposureIcon}
      label="Calculus"
      icon2={RouterIcon}
      label2="Computer tech"
      src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/71172851_380300449317203_5567050052599283712_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=4QR4D4AVP4wAX8TTP21&_nc_ht=scontent.fybz2-2.fna&oh=e17ce6457b3d8f53cfa94b9bf7cdaa7b&oe=5F78A3C4"
      />

      <br></br>

      <LearnCard
      title="Alvin"
      desc="Hello i am alvin"
      value="4"
      icon=<AudiotrackIcon />
      label="Music"
      icon2=<PhotoCameraIcon />
      label2="Photography"
      src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/118708569_619048398779591_6458803775948465152_n.jpg?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=9-_KDUXJMrMAX_QETp9&_nc_ht=scontent.fybz2-2.fna&oh=a0f6a05d451c85d7f010067f8d365937&oe=5F79F6E2"
      />

      <br></br>

      <LearnCard
      title="Kavin"
      desc="Hello i am kavin"
      value="5"
      icon=<ExposureIcon />
      label="Calculus"
      icon2=<PhotoFilterIcon />
      label2="Photoshop"
      src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.15752-9/118768266_688321465376534_7407808357516412197_n.jpg?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=_5ZWogUNsQIAX_lxg3x&_nc_ht=scontent.fybz2-2.fna&oh=7051c25d7188ca1b55f1cd4b1f140a29&oe=5F79C8EA"
      />

      <br></br>

      <LearnCard
      title="Do-oh"
      desc="Hello i am dooh"
      value="1"
      icon=<AppleIcon />
      label="iOS development"
      icon2=<AdbIcon />
      label2="Android development"
      src="https://scontent.fybz2-1.fna.fbcdn.net/v/t1.15752-9/118812887_616991835674522_7887071315083101109_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=btkQvsqGF3MAX9eSWs-&_nc_ht=scontent.fybz2-1.fna&oh=118308bd20eee12aef02deee98375b1f&oe=5F783760"
      />

    </div>
    </div>
    </>
  );
}
}

export default Learn;
