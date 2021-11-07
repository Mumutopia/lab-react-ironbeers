import React, { Component } from 'react';
import axios from  'axios';
import NavMain from './NavMain';
import { Link } from 'react-router-dom';

export class BeersList extends Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
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
    
    return (
        beers.length ? (
      <div>
      <NavMain/>
        {beers.map((beer) => {
          return(
            <React.Fragment key= {beer._id}>
              <p>{beer.name}</p>
              <Link to={`/beer/${beer._id}`}> Details</Link>
              </React.Fragment>
              )
          
          
        })}
      </div>
    ) : (<p> <NavMain/></p>))
     
  }
}

export default BeersList;
