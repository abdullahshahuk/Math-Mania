import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//List of pages
import MainAppPage from "./webpages";
import SelectLevel from "./webpages/selectLevel";
import Level0 from './webpages/Level0';
import Level1 from './webpages/Level1';
import Level2 from './webpages/Level2';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path="/MainAppPage" component={MainAppPage} />
        <Route  exact path="/SelectLevel" component={SelectLevel} />
        <Route exact path="/Level0" component={Level0} />
        <Route exact path="/Level1" component={Level1} />
        <Route exact path="/Level2" component={Level2} />
      </Switch>
    </Router>
  }
}

export default App;
