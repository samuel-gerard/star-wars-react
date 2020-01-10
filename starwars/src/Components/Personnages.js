import React from "react";

const axios = require('axios');

class Personnages extends React.Component {

  state = { title: "Personnages", personnages: [], vaisseau: null };

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      this.setState({ personnages: response.data.results });
    })
  }

  addFavorite(personnage){
    axios.post("https://test.corentindesfarges.fr/favorites", personnage)
  }

  render() {
    return (
      <div className="container">
        <h1 className="category-title">{this.state.title}</h1>
        {this.state.personnages.map((personnage, i) => (
          <div className="card">
              <ul className="list-group list-group-flush" key={i}>
                <div className="card-header">
                  <h2>{personnage.name}</h2>  
                </div>
                <li className="list-group-item">Taille (cm) : {personnage.height}</li>
                <li className="list-group-item">Poids (Kg) : {personnage.mass}</li>
                <li className="list-group-item">Couleur de cheveux : {personnage.hair_color}</li>
                <li className="list-group-item">Couleur de peau : {personnage.skin_color}</li>
                <li className="list-group-item">Couleur des yeux : {personnage.eye_color}</li>
                <li className="list-group-item">Date de naissance : {personnage.birth_year}</li>
                <li className="list-group-item">Genre : {personnage.gender}</li>
                <li className="list-group-item">Lieu de naissance : {personnage.homeworld}</li>
                <li className="list-group-item">Vaisseaux : 
                  <ul>
                    {personnage.starships.map((starship, j) => (
                      <li className="sous-items" key={j}>{starship}</li>
                    ))}
                  </ul>
                </li>
                <button className="btn btn-secondary" onClick={() => this.addFavorite({personnage})}>Ajouter aux favoris</button>
              </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Personnages;
