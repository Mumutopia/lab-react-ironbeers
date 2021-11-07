import React, { Component } from 'react';
import NavMain from './NavMain';
import axios from 'axios';

export default class NewBeer extends Component {
  state = {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    attenuation_level: {
      type: Number,
    },
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.id]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
      
    evt.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((APIResponse) => {

          console.log("success")
          console.log(APIResponse)
      })
      .catch((err) => {
          console.log(err)
      }) 
  };

  render() {
    return (
      <>
        <NavMain />
        <form onSubmit={this.handleSubmit} className="form">
          <h2>add new Beer</h2>
          <hr />
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            id="name"
            className="input"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="description" className="label">
            description
          </label>
          <input
            id="description"
            className="input"
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="attenuation_level" className="label">
            attenuation level
          </label>
          <input
            id="attenuation_level"
            className="input"
            type="number"
            onChange={this.handleChange}
          />
          <button className="button">Add</button>
        </form>
      </>
    );
  }
}
