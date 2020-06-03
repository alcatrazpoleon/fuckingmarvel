import React from "react";
import "./ListItem.css";

const ListItem = ({ result: {name, description, thumbnail } }) => {
  const { path, extension } = thumbnail;
  const srcImage = `${path}.${extension}`;
  return (    
      <div className="col-md-4">
        <div className="portfolio-container">
          <div className="portfolio-details">
            <a>
              <h2>{name}</h2>
            </a>
            <a>
              <p>{description}</p>
            </a>
          </div>
          <img src={srcImage} className="c-image" alt="portfolio" />
          <div className="p-button">
            <button className="myButton"> Inscribete </button>
          </div>
        </div>
      </div>    
  );
};

export default ListItem;
