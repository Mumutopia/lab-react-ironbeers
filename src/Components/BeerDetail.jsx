import React, { Component } from 'react'
import axios from "axios"

export default class BeerDetail extends Component {
state = {
    beer : null,
}

async componentDidMount() {
    
    try {

      const res = await axios.get(
        'https://ih-beers-api2.herokuapp.com/:id'+this.props.match.params.id
      );

      this.setState({
        beers: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  }

    render() {
        return (
            <div>
                hellooooooo
            </div>
        )
    }
}
