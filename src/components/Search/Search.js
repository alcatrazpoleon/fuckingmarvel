import React, { Component } from 'react';
import '../Search/Search.css'

class Search extends Component{
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            chid:''
        }
    }
/* Se ejecuta cada vez que se escribe en el input */
    handelChange = e =>{
        const query = e.target.value
        this.setState({query})
    }

    handleSubmit = e =>{

        e.preventDefault()
        const {query} = this.state
        this.props.searchSuperHero(query)
        
    }

    render(){
        return(
            <form className="Search " onSubmit={this.handleSubmit}>
                <label className="sr-only">Nombre</label>
                <input
                    type="text"
                    className="Search-input"
                    placeholder="Ex: Captain America"
                    value={this.state.value}
                    onChange={this.handelChange}               
                />
                <button type="submit" className="s-button">Buscar</button>
            </form>
        )
    }




}

export default Search