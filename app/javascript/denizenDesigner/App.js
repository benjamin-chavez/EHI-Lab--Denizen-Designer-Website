import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavbarPrimary from './components/layout/NavbarPrimary';
import NavbarSecondary from './components/layout/NavbarSecondary';
import participants from './data/participants';
import ParticipantList from './components/ParticipantList';
import WorkCard from './components/card';

import Home from './components/pages/Home';
import Interviews from './components/pages/Interviews';
import Report from './components/pages/Report';
import DesignerDatabase from './components/pages/DesignerDatabase';
import Quotes from './components/pages/Quotes';
import Resources from './components/pages/Resources';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarPrimary />
          <NavbarSecondary />
          <div id="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/interviews' component={Interviews} />
              <Route exact path='/report' component={Report} />
              <Route exact path='/designerdatabase' component={DesignerDatabase} />
              <Route exact path='/quotes' component={Quotes} />
              <Route exact path='/resources' component={Resources} />
            </Switch>
          </div>
          <ParticipantList participants={this.state.participants}
          />
          <WorkCard />
        </div>
      </Router>
    );
  }
}

export default App;
