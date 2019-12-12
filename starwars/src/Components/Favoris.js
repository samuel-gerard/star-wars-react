import React from "react";

class Favoris extends React.Component {
  state = { begin: "Favoris" };

  render() {
    return (
    <h1>{this.state.begin}</h1>
    );
  }
}

export default Favoris;
