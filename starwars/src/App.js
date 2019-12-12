import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, Link } from "react-router-dom";

import Personnages from "./Components/Personnages";
import Planetes from "./Components/Planetes";
import Vaisseaux from "./Components/Vaisseaux";
import Favoris from "./Components/Favoris";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenue sur Star Wars API</h2>
        </div>


          <Link to="/">Accueil</Link><br />
          <br />
          <Link to="/personnages">Personnages</Link><br />
          <br />
          <Link to="/planetes">Planetes</Link><br />
          <br />
          <Link to="/vaisseaux">Vaisseaux</Link><br />
          <br />
          <Link to="/favoris">Favoris</Link><br />
          <br />


        <div>
          <Switch>
            <Route path='/personnages' component={Personnages} />
            <Route path='/planetes' component={Planetes} />
            <Route path='/vaisseaux' component={Vaisseaux} />
            <Route path='/favoris' component={Favoris} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
