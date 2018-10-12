import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Histories from './Histories';
import './App.css'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                <div>
                <NavLink activeClassName="activeLink" exact to="/"> Accueil </NavLink>
                <NavLink activeClassName="activeLink" to="/notre-histoire"> Notre Histoire </NavLink>
                </div>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/notre-histoire" component={Histories} />
                </Switch>
              </div>
            </BrowserRouter>
        );
    }
}

export default App;