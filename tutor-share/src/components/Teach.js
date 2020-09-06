import React from 'react';
import TeachSearchBar from "./TeachSearchBar";
import CardGrid from "./TeachCardGrid";

const INITIAL_STATE = {
}
  

class Teach extends React.Component {

  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  render() {
  return (
      <>
      <TeachSearchBar/>
    <div style={{ width:'100%', position: 'fixed', height: '100%' , top:'70px', padding: '0px', overflow: 'scroll', marginBottom:80}}>
      <div style={{ width:'90%', margin: 'auto',  marginBottom:130, overflow: 'auto'}}>
        <CardGrid/>
      </div>     
    </div>
    </>
  );
}
}

export default Teach;
