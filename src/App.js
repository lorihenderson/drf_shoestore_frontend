import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoe: []
    }
  };

  componentDidMount() {
    fetch('http://localhost:8000/api/shoe')
      .then((res) => res.json())
      .then((data) => this.setState({shoe: data}));
  }

  render() {
    return (
      <div>
        <h1>It's a Shoe's World</h1>
        <ul>
          {this.state.shoe.map((s) => (
            <div>
            <li>ID: {s.id} </li>
            <ul><p>Brand Name: {s.brand_name}</p></ul>
            <ul><p>Manufacturer: {s.manufacturer}</p></ul>
            <ul><p>Size: {s.size}</p></ul>
            <ul><p>Color: {s.color}</p></ul>
            <ul><p>Material: {s.material}</p></ul>
            <ul><p>Shoe Type: {s.shoe_type}</p></ul>
            <ul><p>Fasten Type: {s.fasten_type}</p></ul>
            <hr></hr>
            </div>
          ))}
        </ul>
      </div>
    );
  };
};

export default App;
