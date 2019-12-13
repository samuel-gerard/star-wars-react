import React from "react";

class Accueil extends React.Component {
  state = { begin: "Bienvenue sur Star Wars API" };

  render() {
    return (
      <div>
        <h1>{this.state.begin}</h1>        
      </div>
    );
  }
}

export default Accueil;
