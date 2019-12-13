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

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <p>
          {this.state.planets.map((planet, i) => (
              <li className="planets-list" key={i}>
                <span className="planet-label">{planet.name}</span>
              </li>
          ))}
        </p>
      </div>
    );
  }
}

export default Planetes;
