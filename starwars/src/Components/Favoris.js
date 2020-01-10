import React from "react";
const axios = require('axios');

class Favoris extends React.Component {

  state = { title: "Favoris", favoris: [] };

  componentDidMount() {
    axios.get('https://test.corentindesfarges.fr/favorites')
    .then((response) => {
      this.setState({ favoris: response.data });
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="category-title">{this.state.title}</h1>

            <div className="card">
              
            </div>

      </div>
    );
  }
}

export default Favoris;
