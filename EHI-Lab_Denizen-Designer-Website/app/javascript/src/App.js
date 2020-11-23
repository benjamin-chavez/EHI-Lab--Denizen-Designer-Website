import React, { Component } from 'react';
import './App.css';

import participants from './data/participants'
import ParticipantList from './components/ParticipantList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants
    };
  }
  render() {
    return (
      <div className="App">
        <ParticipantList participants={this.state.participants}
        />
      </div>
    );
  }
}

export default App;
