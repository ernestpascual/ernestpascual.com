import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Resume from "./components/Resume"


class App extends Component {
  render() {w
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </div>
    );
  }
}

export default App;
