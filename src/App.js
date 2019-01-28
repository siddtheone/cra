import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Incidents from './Components/Incidents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Incidents} />
            <Route exact path="/incident/:id" component={() => <div>asd2f</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
