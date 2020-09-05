import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test'

const INITIAL_STATE = {
  message: "hi"
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
    <Test message="lmao"/>
    <Test message="klkl"/>
    <Test message="kk"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.message}
        </p>
        <h1
        onClick={() => this.editMessage('lol')}
        >
          Learn React
        </h1>
      </header>
    </div>
  );
}
}

export default App;
