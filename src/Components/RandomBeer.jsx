import React, { Component } from 'react'
import NavMain from './NavMain';
import axios from "axios";

export default class BeerDetail extends Component {
state = {
    beers : null,
}

async componentDidMount() {
    try {

        
      const res = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random' 
      );
        
      this.setState({
        beers: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

    render() {
        const { beers } = this.state;

        
        console.log( beers)
    
    return (
        !beers ?  
        ( <p>hello</p> ): 
        (<div> <NavMain/>
        <p>{beers.name}</p>
      </div>)
        )
       
        
    }
}
