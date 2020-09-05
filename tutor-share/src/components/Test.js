import React from 'react';

const INITIAL_STATE = {
  message: "hi"
}

class Test extends React.Component {

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
      {this.props.message}
    </div>
  );
}
}

export default Test;
