import React from "react";
const axios = require('axios');

import { Link } from "react-router-dom";


class Favori extends React.Component {

  state = { title: "Favori", favori: this.props.match.params.id };

  componentDidMount() {
    axios.get("https://test.corentindesfarges.fr/favorites/" + this.props.match.params.id)
    .then((response) => {
      this.setState({ favori: response.data });
    })
  }

  handleChange(event)
  {
    // modifie state
    var field = event.target.dataset.name
    var type = event.target.dataset.type

    const fav = this.state.favori
    fav[type][field] = event.target.value
    this.setState({favori: fav})

    // PUT REQUEST
    axios.post("https://test.corentindesfarges.fr/favorites/" + this.state.favori.id, this.state.favori)
    
  }


  renderSwitch(favori) {
    switch(Object.keys(favori)[0]) {
      case 'planet':
        return (
          <div>
            <ul className="list-group list-group-flush">
              <div className="card-header">
                <h2>{favori.planet.name}</h2>  
              </div>
              <li className="list-group-item">Période de roation (jours) : <input type="text" onChange={this.handleChange.bind(this)} data-name="rotation_period" data-type="planet" value={favori.planet.rotation_period} /></li>
              <li className="list-group-item">Période d'orbite (jours) : <input type="text" onChange={this.handleChange.bind(this)} data-name="orbital_period" data-type="planet" value={favori.planet.orbital_period} /></li>
              <li className="list-group-item">Diamètre (m) : <input type="text" onChange={this.handleChange.bind(this)} data-name="diameter" data-type="planet" value={favori.planet.diameter} /></li>
              <li className="list-group-item">Climat : <input type="text" onChange={this.handleChange.bind(this)} data-name="climate" data-type="planet" value={favori.planet.climate} /></li>
              <li className="list-group-item">Gravité : <input type="text" onChange={this.handleChange.bind(this)} data-name="gravity" data-type="planet" value={favori.planet.gravity} /></li>
              <li className="list-group-item">Terrains : <input type="text" onChange={this.handleChange.bind(this)} data-name="terrain" data-type="planet" value={favori.planet.terrain} /></li>
              <li className="list-group-item">Surface d'eau (m2) : <input type="text" onChange={this.handleChange.bind(this)} data-name="surface_water" data-type="planet" value={favori.planet.surface_water} /></li>
              <li className="list-group-item">Population : <input type="text" onChange={this.handleChange.bind(this)} data-name="population" data-type="planet" value={favori.planet.population} /></li>
            </ul>
          </div>
        );
      case 'personnage':
        return (
            <div>
              <ul className="list-group list-group-flush">
                <div className="card-header">
                  <h2>{favori.personnage.name}</h2>  
                </div>
                <li className="list-group-item">Taille (cm) : <input type="text" onChange={this.handleChange.bind(this)} data-name="height" data-type="personnage" value={favori.personnage.height} /></li>
                <li className="list-group-item">Poids (Kg) : <input type="text" onChange={this.handleChange.bind(this)} data-name="mass" data-type="personnage" value={favori.personnage.mass} /></li>
                <li className="list-group-item">Couleur de cheveux : <input type="text" onChange={this.handleChange.bind(this)} data-name="hair_color" data-type="personnage" value={favori.personnage.hair_color} /></li>
                <li className="list-group-item">Couleur de peau : <input type="text" onChange={this.handleChange.bind(this)} data-name="skin_color" data-type="personnage" value={favori.personnage.skin_color} /></li>
                <li className="list-group-item">Couleur des yeux : <input type="text" onChange={this.handleChange.bind(this)} data-name="eye_color" data-type="personnage" value={favori.personnage.eye_color} /></li>
                <li className="list-group-item">Date de naissance : <input type="text" onChange={this.handleChange.bind(this)} data-name="birth_year" data-type="personnage" value={favori.personnage.birth_year} /></li>
                <li className="list-group-item">Genre : <input type="text" onChange={this.handleChange.bind(this)} data-name="gender" data-type="personnage" value={favori.personnage.gender} /></li>
              </ul>
            </div>
        );
      case 'starship':
        return (
          <div>
            <ul className="list-group list-group-flush">
              <div className="card-header">
                <h2>{favori.starship.name}</h2>
              </div>
              <li className="list-group-item">Model : <input type="text" onChange={this.handleChange.bind(this)} data-name="model" data-type="starship" value={favori.starship.model} /></li>
              <li className="list-group-item">Constructeur : <input type="text" onChange={this.handleChange.bind(this)} data-name="manufacturer" data-type="starship" value={favori.starship.manufacturer} /></li>
              <li className="list-group-item">Coût : <input type="text" onChange={this.handleChange.bind(this)} data-name="cost_in_credits" data-type="starship" value={favori.starship.cost_in_credits} /></li>
              <li className="list-group-item">Longueur (m) : <input type="text" onChange={this.handleChange.bind(this)} data-name="length" data-type="starship" value={favori.starship.length} /></li>
              <li className="list-group-item">Vitesse maximale dans l'atmosphere (km/h) : <input type="text" onChange={this.handleChange.bind(this)} data-name="max_atmosphering_speed" data-type="starship" value={favori.starship.max_atmosphering_speed} /></li>
              <li className="list-group-item">Équipage : <input type="text" onChange={this.handleChange.bind(this)} data-name="crew" data-type="starship" value={favori.starship.crew} /></li>
              <li className="list-group-item">Passagers : <input type="text" onChange={this.handleChange.bind(this)} data-name="passengers" data-type="starship" value={favori.starship.passengers} /></li>
              <li className="list-group-item">Capacité de cargaison : <input type="text" onChange={this.handleChange.bind(this)} data-name="cargo_capacity" data-type="starship" value={favori.starship.cargo_capacity} /></li>
              <li className="list-group-item">Durée des vivres : <input type="text" onChange={this.handleChange.bind(this)} data-name="consumables" data-type="starship" value={favori.starship.consumables} /></li>
              <li className="list-group-item">Vitesse en hyperdrive : <input type="text" onChange={this.handleChange.bind(this)} data-name="hyperdrive_rating" data-type="starship" value={favori.starship.hyperdrive_rating} /></li>
              <li className="list-group-item">MGLT : <input type="text" onChange={this.handleChange.bind(this)} data-name="MGLT" data-type="starship" value={favori.starship.MGLT} /></li>
              <li className="list-group-item">Type de Vaisseau : <input type="text" onChange={this.handleChange.bind(this)} data-name="starship_class" data-type="starship" value={favori.starship.starship_class} /></li>
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
        <h1 className="category-title">Details du favori</h1>
            <div className="card">
              <ul className="list-group list-group-flush">
                {this.renderSwitch(this.state.favori)}
                <Link className="btn btn-secondary" to="/favoris">
                  Retour aux favoris
                </Link>
              </ul>
            </div>
      </div>
    );
  }
}

export default Favori;
