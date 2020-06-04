import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Prueba/Card.css";

class Cards extends React.Component {
  constructor() {
    super();
    this.state = {
      characterId:""

    }
  }

  render() {
    const {
      name,
      description,
      path,
      extension,
      disponible,
      key
    } = this.props;
    
   
    
    const img = `${path}.${extension}`;
    
 

    function handleClick(e) {
      e.preventDefault();
      characterId = {key};
      const {characterId} = this.state
      this.props.getherocomic(characterId)
        
    }


    return (
      <div className="portfolio-container">
        <img src={img} className="c-image" alt="portfolio" />
        <div className="portfolio-details">
          <a>
            <h2 className="nameHero">{name}</h2>
          </a>
          <a>
            <p className="desHero">{description}</p>
          </a>
        </div>
        <div className="p-button">
          <p className="dispon">Comics: {disponible}</p>
          <p className="dispon">id: {key}</p>
          <button className="myButton" onClick={handleClick}>
                       Ver más
          </button>
        </div>
      </div>
    );
  }
}
export default Cards;
