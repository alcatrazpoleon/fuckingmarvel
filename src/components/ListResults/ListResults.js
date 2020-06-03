import React from "react"
import ListItem from '../ListItem/ListItem.js'

import "./ListResults.css"

const ListResults = ({ results }) => (
  <ul className="ListResults">
    {
       results && results.map( val => <ListItem result={val} key={val.id} />) 
    }
  </ul>
)

export default ListResults
