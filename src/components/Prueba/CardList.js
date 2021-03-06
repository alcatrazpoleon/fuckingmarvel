import React from 'react'
import Cards from '../Prueba/Card.js'
import '../Prueba/Card.css'


const CardsList = ({ results }) => (
    //Aqui los estilos de las tarjetas
    
        <div className="row listado">
            
            {results.map((val) => (
                <Cards
                    name={val.name}
                    key={val.id}
                    description={val.description} 
                    path = {val.thumbnail.path}
                    extension={val.thumbnail.extension}
                    disponible={val.comics.available} 
                                                  
                />

            ))}       
        </div>
    
)


export default CardsList