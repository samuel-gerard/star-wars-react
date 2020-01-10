import React from "react";
const axios = require('axios');

class Favoris extends React.Component {

  state = { title: "Favoris", favoris: [], personnages: [], planets: [], starships: [], currentType: null };

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
                <h2>{favori.planet.name}</h2>  
              </div>
              <li className="list-group-item">Période de roation (jours) : {favori.planet.rotation_period}</li>
              <li className="list-group-item">Période d'orbite (jours) : {favori.planet.orbital_period}</li>
              <li className="list-group-item">Diamètre (m) : {favori.planet.diameter}</li>
              <li className="list-group-item">Climat : {favori.planet.climate}</li>
              <li className="list-group-item">Gravité : {favori.planet.gravity}</li>
              <li className="list-group-item">Terrains : {favori.planet.terrain}</li>
              <li className="list-group-item">Surface d'eau (m2) : {favori.planet.surface_water}</li>
              <li className="list-group-item">Population : {favori.planet.population}</li>
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
                <li className="list-group-item">Taille (cm) : {favori.personnage.height}</li>
                <li className="list-group-item">Poids (Kg) : {favori.personnage.mass}</li>
                <li className="list-group-item">Couleur de cheveux : {favori.personnage.hair_color}</li>
                <li className="list-group-item">Couleur de peau : {favori.personnage.skin_color}</li>
                <li className="list-group-item">Couleur des yeux : {favori.personnage.eye_color}</li>
                <li className="list-group-item">Date de naissance : {favori.personnage.birth_year}</li>
                <li className="list-group-item">Genre : {favori.personnage.gender}</li>
                <li className="list-group-item">Lieu de naissance : {favori.personnage.homeworld}</li>
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
              <li className="list-group-item">Model : {favori.starship.model}</li>
              <li className="list-group-item">Constructeur : {favori.starship.manufacturer}</li>
              <li className="list-group-item">Coût : {favori.starship.cost_in_credits}</li>
              <li className="list-group-item">Longueur (m) : {favori.starship.length}</li>
              <li className="list-group-item">Vitesse maximale dans l'atmosphere (km/h) : {favori.starship.max_atmosphering_speed}</li>
              <li className="list-group-item">Équipage : {favori.starship.crew}</li>
              <li className="list-group-item">Passagers : {favori.starship.passengers}</li>
              <li className="list-group-item">Capacité de cargaison : {favori.starship.cargo_capacity}</li>
              <li className="list-group-item">Durée des vivres : {favori.starship.consumables}</li>
              <li className="list-group-item">Vitesse en hyperdrive : {favori.starship.hyperdrive_rating}</li>
              <li className="list-group-item">MGLT : {favori.starship.MGLT}</li>
              <li className="list-group-item">Type de Vaisseau : {favori.starship.starship_class}</li>
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

        {this.state.favoris.map((favori, i) => (
          
          <div className="card">
            <ul className="list-group list-group-flush" key={i}>
              
              {this.renderSwitch(favori)}

              <button className="btn btn-secondary" onClick={() => this.test({favori})}>Modifier</button>
              <button className="btn btn-secondary" onClick={() => this.handleDelete({favori})}>Supprimer</button>
            </ul>
          </div>
        ))}

      </div>
    );
  }
}

export default Favoris;
