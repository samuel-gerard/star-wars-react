import React from "react";
const axios = require('axios');

class Planetes extends React.Component {

  state = { title: "Planetes", planets: [] };

  componentDidMount() {
    axios.get('https://swapi.co/api/planets/')
    .then((response) => {
      this.setState({ planets: response.data.results });
    })
  }


  addFavorite(planet){
    axios.post("https://test.corentindesfarges.fr/favorites", planet)
  }

  render() {
    return (
      <div className="container">
        <h1 className="category-title">{this.state.title}</h1>
        {this.state.planets.map((planet, i) => (
          <div key={i} className="card">
            <ul className="list-group list-group-flush" key={i}>
              <div className="card-header">
                <h2>{planet.name}</h2>  
              </div>
              <li className="list-group-item">Période de roation (jours) : {planet.rotation_period}</li>
              <li className="list-group-item">Période d'orbite (jours) : {planet.orbital_period}</li>
              <li className="list-group-item">Diamètre (m) : {planet.diameter}</li>
              <li className="list-group-item">Climat : {planet.climate}</li>
              <li className="list-group-item">Gravité : {planet.gravity}</li>
              <li className="list-group-item">Terrains : {planet.terrain}</li>
              <li className="list-group-item">Surface d'eau (m2) : {planet.surface_water}</li>
              <li className="list-group-item">Population : {planet.population}</li>
              <button className="btn btn-secondary" onClick={() => this.addFavorite({planet})}>Ajouter aux favoris</button>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Planetes;
