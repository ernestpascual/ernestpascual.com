import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Menu from "./components/Menu"

function App() {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
        </Switch>
      </div>
    );

  }

export default App;
