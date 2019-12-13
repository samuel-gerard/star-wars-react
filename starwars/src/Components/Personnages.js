import React from "react";
const axios = require('axios');

class Personnages extends React.Component {

  state = { begin: "Personnages", personnages: [] };

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      this.setState({ personnages: response.data.results });
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.begin}</h1>
        <p>
        {this.state.personnages.map((personnage, i) => (
            <li className="personnages-list" key={i}>
              <span className="personnage-label">{personnage.name}</span>
            </li>
        ))}
        </p>
      </div>
    );
  }
}

export default Personnages;
