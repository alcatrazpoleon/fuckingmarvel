import React, { Component } from 'react';
import Search from '../Search/Search.js'
import ListResults from '../ListResults/ListResults.js'
import * as serviceApi from '../../services/serviceApiMarvel.js';
import '../App/app.css'
import CardsList from '../Prueba/CardList.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      
    };
  }

  searchSuperHero = (query) => {
    
      serviceApi
      .searchSuperHero(query)
      .then((json) => this.setState( {results:json.data.results} )); 
  };

  render() {
    const { results } = this.state;
    console.log(results)
    return (
      <div className="App">
        <div className="container">
         <div className="top-m">
           <img src="https://www.diseñoscreativos.com/wp-content/uploads/2017/11/marvel-dise%C3%B1os-creativos-1024x258.png" className="brandM"/>
          <h1> Buscar Heroes</h1>
          <Search searchSuperHero={this.searchSuperHero} />
          <CardsList results={results} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
