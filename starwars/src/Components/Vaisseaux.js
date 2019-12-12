import React from "react";

class Vaisseaux extends React.Component {
  state = { begin: "Vaisseaux" };

  render() {
    return (
    <h1>{this.state.begin}</h1>
    );
  }
}

export default Vaisseaux;
