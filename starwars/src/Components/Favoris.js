import React from "react";
const axios = require('axios');

import { Link, Redirect } from "react-router-dom";
import Favori from "./Favori";

class Favoris extends React.Component {

  state = { title: "Favoris", favoris: [] };

  componentDidMount() {
    axios.get('https://test.corentindesfarges.fr/favorites')
    .then((response) => {
      this.setState({ favoris: response.data });
    })
  }

  handleDelete(data)
  {
    axios.delete("https://test.corentindesfarges.fr/favorites/" + data.favori.id)
    const favoris = [...this.state.favoris]
    const index = favoris.findIndex(favori => favori.id === data.favori.id)
    favoris.splice(index, 1)
    this.setState({ favoris: favoris });
  }


  renderSwitch(favori) {
    switch(Object.keys(favori)[0]) {
      case 'planet':
        return (
          <div>
            <ul className="list-group list-group-flush">
              <div className="card-header">
                <h2>Planète : {favori.planet.name}</h2>  
              </div>
            </ul>
          </div>
        );
      case 'personnage':
        return (
            <div>
              <ul className="list-group list-group-flush">
                <div className="card-header">
                  <h2>Personnage : {favori.personnage.name}</h2>  
                </div>
              </ul>
            </div>
        );
      case 'starship':
        return (
          <div>
            <ul className="list-group list-group-flush">
              <div className="card-header">
                <h2>Vaisseau : {favori.starship.name}</h2>
              </div>
            </ul>
          </div>
        );
      default:
        return '';
    }
  }


  render() {
    return (
      <div className="container">
        <h1 className="category-title">{this.state.title}</h1>

        {/* <Link className="btn btn-danger" to="/favori/create">
            Créer un favori
        </Link> */}

        {this.state.favoris.map((favori, i) => (
          
          <div className="card">
            <ul className="list-group list-group-flush" key={i}>
              {this.renderSwitch(favori)}
              <button className="btn btn-danger" onClick={() => this.handleDelete({favori})}>Supprimer</button>
              <a className="btn btn-secondary toUpdate" href={`/favori/${favori.id}`}>Details</a>
            </ul>
          </div>
        ))}

      </div>
    );
  }
}

export default Favoris;
