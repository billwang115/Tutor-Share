import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Nav from './components/Nav'
import Learn from './components/Learn'
import Teach from './components/Teach'
import Profile from './components/Profile'

const INITIAL_STATE = {
  page: 'learn'
}

class App extends React.Component {

  constructor() {
    super()
    this.state = INITIAL_STATE;
  }

  editMessage(newMessage) {
    this.setState({message: newMessage})
  }

  render() {
  return (
    <div className="App">
      
      {this.state.page === 'learn' && <Learn />}

      {this.state.page === 'teach' && <Teach />}

      {this.state.page === 'profile' && <Profile/>}


      <Nav first={()=>this.setState({page: 'learn'})} second={()=>this.setState({page: 'teach'})} third={() => this.setState({page: 'profile'})}/>
    </div>
  );
}
}

export default App;
