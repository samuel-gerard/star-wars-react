import React from "react";
// const axios = require('axios');

// import { Link, Redirect } from "react-router-dom";

class Create extends React.Component {


  render() {
    return (
      <div className="container">
        <h1 className="category-title">Création du nouveau favori</h1>

        <div className="card">
            <div className="card-header">
                <h2>Remplir le formulaire</h2>
            </div>
            <ul className="list-group list-group-flush">
                <form onSubmit={this.handleSubmit}>
                    <label>Nom du favori :</label>
                    <input type="text" />
                    
                    <input className="btn btn-secondary" type="submit" value="Créer un favori" />
                </form>
            </ul>
        </div>
        
      </div>
    );
  }
}

export default Create;
