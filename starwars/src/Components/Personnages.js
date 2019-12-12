import React from "react";

class Personnages extends React.Component {
  state = { begin: "Personnages" };

  render() {
    return (
    <h1>{this.state.begin}</h1>
    );
  }
}

export default Personnages;
