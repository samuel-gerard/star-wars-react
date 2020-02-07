import React, { Component } from 'react';
import './App.css';

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Navbar,
} from 'react-bootstrap';

import { Switch, Route, Link } from "react-router-dom";

import Personnages from "./Components/Personnages";
import Planetes from "./Components/Planetes";
import Vaisseaux from "./Components/Vaisseaux";
import Favoris from "./Components/Favoris";
import Favori from "./Components/Favori";
import Create from "./Components/Create";
import Accueil from "./Components/Accueil";


class App extends Component {
  render() {
    return (
      <div className="body">

      <Navbar className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          <div className="logo-navbar"></div><div className="subtitle-navbar">FINDER</div>
        </Link>
        <div className="row text-center d-flex justify-content-center pt-2 navbar-content">
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold link-navbar">
              <Link className="nav-link" to="/">Accueil</Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold link-navbar">
              <Link className="nav-link" to="/personnages">Personnages</Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold link-navbar">
              <Link className="nav-link" to="/planetes">Planetes</Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold link-navbar">
              <Link className="nav-link" to="/vaisseaux">Vaisseaux</Link>
            </h6>
          </div>
          <div className="col-md-2 mb-3">
            <h6 className="text-uppercase font-weight-bold link-navbar">
              <Link className="nav-link" to="/favoris">Favoris</Link>
            </h6>
          </div>
        </div>
      </Navbar>

        <div>
          <Switch>
            <Route path='/personnages' component={Personnages} />
            <Route path='/planetes' component={Planetes} />
            <Route path='/vaisseaux' component={Vaisseaux} />
            <Route path='/favoris' component={Favoris} />
            <Route path='/favori/create' component={Create} />
            <Route path='/favori/:id' component={Favori} />
            <Route path='/' component={Accueil} />
          </Switch>
        </div>

        <footer id="sticky-footer" className="bg-dark text-white-50">
          <div className="text-center">
            <div className="row text-center d-flex justify-content-center pt-5 mb-3">
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold link-footer">
                  <Link className="nav-link" to="/">Accueil</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold link-footer">
                  <Link className="nav-link" to="/personnages">Personnages</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold link-footer">
                  <Link className="nav-link" to="/planetes">Planetes</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold link-footer">
                  <Link className="nav-link" to="/vaisseaux">Vaisseaux</Link>
                </h6>
              </div>
              <div className="col-md-2 mb-3">
                <h6 className="text-uppercase font-weight-bold link-footer">
                  <Link className="nav-link" to="/favoris">Favoris</Link>
                </h6>
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center">
            <div className="col-md-1">
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            <small>Copyright &copy; Samuel Gerard</small>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
