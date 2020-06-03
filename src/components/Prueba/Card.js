import React from "react";
import { Card, Button } from "react-bootstrap";
import "../Prueba/Card.css";


class Cards extends React.Component {    
  render() {
    const { name, description, path, extension, disponible, comics} = this.props;
    const img = `${path}.${extension}`;
    
    const cm = comics.map((comic) =>
        <h1>{comic.name}</h1>
        
    );

    function handleClick(e){
      e.preventDefault();
      console.log(cm);

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
           <button className="myButton" onClick={handleClick} > Ver más</button>
      </div> 
      </div>
 
    );
  }
}
export default Cards;





