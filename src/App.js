import React, { Component } from 'react';
import './App.css';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home"
import Resume from "./components/Resume"


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
      </Switch>
    );
  }
}

export default App;
