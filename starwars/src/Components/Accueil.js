import React from "react";

class Accueil extends React.Component {
  state = { begin: "Bienvenue sur Star Wars API" };

  render() {
    return (
    <h1>{this.state.begin}</h1>
    );
  }
}

export default Accueil;
