// https://github.com/TruLLi
import React from 'react';
import axios from 'axios';

export default class Denis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        pokemon: []
    };
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        const pokemon = res.data.results;
        this.setState({ pokemon });
      })
  }

  render() {
    this.state.pokemon.forEach(element => {
      console.log(element.name);
  });

    return (
      <div>
        <ul>
          {this.state.pokemon.map((pokemon, i) => {
              // return console.log(pokemon);
              return <li key={i}>{pokemon.name}</li>

          })}
        </ul>
      </div>

    )
  }
}