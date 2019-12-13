import React, { Component } from 'react';
import './App.css';

import {
  Navbar,
} from 'react-bootstrap';

import { Switch, Route, Link } from "react-router-dom";

import Personnages from "./Components/Personnages";
import Planetes from "./Components/Planetes";
import Vaisseaux from "./Components/Vaisseaux";
import Favoris from "./Components/Favoris";
import Accueil from "./Components/Accueil";


class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Satr Wars API</Link><br />
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/personnages">Personnages</Link><br />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/planetes">Planetes</Link><br />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vaisseaux">Vaisseaux</Link><br />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favoris">Favoris</Link><br />
          </li>
        </ul>
      </Navbar>

        <div>
          <Switch>
            <Route path='/personnages' component={Personnages} />
            <Route path='/planetes' component={Planetes} />
            <Route path='/vaisseaux' component={Vaisseaux} />
            <Route path='/favoris' component={Favoris} />
            <Route path='/' component={Accueil} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
