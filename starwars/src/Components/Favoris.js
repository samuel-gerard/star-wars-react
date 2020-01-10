import React from "react";
const axios = require('axios');

class Favoris extends React.Component {

  state = { title: "Favoris", favoris: [], personnages: [], planets: [], starships: [] };

  componentDidMount() {
    axios.get('https://test.corentindesfarges.fr/favorites')
    .then((response) => {
      this.setState({ favoris: response.data });
      console.log(response.data)
      // console.log(this.state.favoris[4])
    })
  }

  test(data)
  {
    if(data.favori.planet.name !== null)
    {
      console.log(data.favori.planet.name)
    }
  }

  handleDelete(data)
  {
    axios.delete("https://test.corentindesfarges.fr/favorites/" + data.favori.id)
    const favoris = [...this.state.favoris]
    const index = favoris.findIndex(favori => favori.id === data.favori.id)
    favoris.splice(index, 1)
    this.setState({ favoris: favoris });
  }

  render() {
    return (
      <div className="container">
        <h1 className="category-title">{this.state.title}</h1>
          {this.state.favoris.map((favori, i) => (
          
          <div className="card">
            <ul className="list-group list-group-flush" key={i}>
              <div className="card-header">
                {/* <h2>{this.state.favoris.name}</h2> */}
              </div>
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
