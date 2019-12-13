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

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
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
                      <li className="personnage-starships" key={j}>{starship}</li>
                    ))}
                  </ul>
                </li>
                <a href="#" className="btn btn-primary">Ajouter aux favoris</a>
              </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Personnages;
