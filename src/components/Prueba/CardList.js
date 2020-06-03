import React from 'react'
import Cards from '../Prueba/Card.js'
import '../Prueba/Card.css'


const CardsList = ({ results }) => (
    //Aqui los estilos de las tarjetas
    
        <div className="row listado">
            
            {results.map((val) => (
                <Cards
                    name={val.name}
                    description={val.description} 
                    path = {val.thumbnail.path}
                    extension={val.thumbnail.extension}
                    key={val.id}
                    disponible={val.comics.available} 
                    comics={val.comics.items}  
                    key={val.id}             
                />

            ))}       
        </div>
    
)


export default CardsList