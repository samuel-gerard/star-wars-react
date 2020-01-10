import React from "react";

class Accueil extends React.Component {
  state = { begin: "Bienvenue sur Star Wars API" };

  render() {
    return (
      <div className="accueil">

        <div className="accueil-header">
          <div className="header-title">
          </div>
          <div className="header-subtitle">FINDER</div>
        </div>

        <div className="accueil-content">
          <h1 className="title-1">Bienvenue sur STAR WARS Finder !</h1>
          <h2 className="title-2">
            Vous trouverez ici une liste de TOUS les personnages interprétés dans les 7 premiers films Star Wars, 
            ainsi que leurs vaisseaux et les planètes qu'ils ont éxplorés.
          </h2>
          <h3 className="title-3">
            Vous pouvez également ajouter n'importe quelle planète, personnage ou vaisseau à la liste des favoris ! 
            Il vous sera ensuite possible de modifier leurs caractères à votre guise.
          </h3>
          <h4 className="title-4">
            Cette application utilise SWAPI, une API qui liste de nombreux élements présents dans l'univers des films STAR WARS.
            Ce projet est réalisé dans le cadre de la formation LP - DWEB de l'IUT Haguenau.
          </h4>
        </div>

      </div>

    );
  }
}

export default Accueil;
