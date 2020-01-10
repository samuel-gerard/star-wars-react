import React from "react";
const axios = require('axios');

class Vaisseaux extends React.Component {

  state = { title: "Vaisseaux", starships: [] };

  componentDidMount() {
    axios.get('https://swapi.co/api/starships/')
    .then((response) => {
      this.setState({ starships: response.data.results });
    })
  }

  addFavorite(starship){
    axios.post("https://test.corentindesfarges.fr/favorites", starship)
    // gérer déja ajouté aux favoris
  }

  render() {
    return (
      <div className="container">
        <h1 className="category-title">{this.state.title}</h1>
          {this.state.starships.map((starship, i) => (

            <div className="card">
              <ul className="list-group list-group-flush" key={i}>
                <div className="card-header">
                  <h2>{starship.name}</h2>
                </div>
                <li className="list-group-item">Model : {starship.model}</li>
                <li className="list-group-item">Constructeur : {starship.manufacturer}</li>
                <li className="list-group-item">Coût : {starship.cost_in_credits}</li>
                <li className="list-group-item">Longueur (m) : {starship.length}</li>
                <li className="list-group-item">Vitesse maximale dans l'atmosphere (km/h) : {starship.max_atmosphering_speed}</li>
                <li className="list-group-item">Équipage : {starship.crew}</li>
                <li className="list-group-item">Passagers : {starship.passengers}</li>
                <li className="list-group-item">Capacité de cargaison : {starship.cargo_capacity}</li>
                <li className="list-group-item">Durée des vivres : {starship.consumables}</li>
                <li className="list-group-item">Vitesse en hyperdrive : {starship.hyperdrive_rating}</li>
                <li className="list-group-item">MGLT : {starship.MGLT}</li>
                <li className="list-group-item">Type de Vaisseau : {starship.starship_class}</li>
                <li className="list-group-item">Pilotes : 
                  <ul>
                    {starship.pilots.map((pilot, j) => (
                      <li className="sous-items" key={j}>{pilot}</li>
                    ))}
                  </ul>
                </li>
                <button className="btn btn-secondary" onClick={() => this.addFavorite({starship})}>Ajouter aux favoris</button>
              </ul>
            </div>
          ))}
      </div>
    );
  }
}

export default Vaisseaux;
