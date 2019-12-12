import React from "react";

class Planetes extends React.Component {
  state = { begin: "Planetes" };

  render() {
    return (
    <h1>{this.state.begin}</h1>
    );
  }
}

export default Planetes;
