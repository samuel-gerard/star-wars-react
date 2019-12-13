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

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <div className="starships">
          {this.state.starships.map((starship, i) => (
              <li className="starships-list" key={i}>
                <span className="starship-label">{starship.name}</span>
              </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Vaisseaux;
