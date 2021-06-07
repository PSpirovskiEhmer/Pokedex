import React, { useState } from "react";
import './App.css';
import axios from "axios";

const App = () => {
  const [name, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")
  const [pokemonIndex, setPokemonIndex] = useState("")
  const [pokemonName, setPokemonName] = useState("")

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      setPokemonIndex(res.data.game_indices[0].game_index)
      setPokemonName(res.data.species.name)
      setPokemonData(toArray);
      console.log(res);
    } catch (e) {
      console.log(e)
    }
  }

const handleChange = (e) => {
  setPokemon(e.target.value.toLowerCase())
};

const handleSubmit = (e) => {
  e.preventDefault();
  getPokemon();
};

  return (
    <div className = "container-pokemon">
    <div className="app">
      <form onSubmit = {handleSubmit}>
        <label>
          <input
            type = "text"
            onChange = {handleChange}
            placeholder = "Pokemon name: "
          />
        </label>
      </form>
      {pokemonData.map((data) => {
        return(
          <div>
            <img src={data.sprites["front_shiny"]} alt = "Couldn't load pokemon"/>

            <div className = "divTable">

              <div className = "divTableBody"></div>

              <div className = "divTableRow">
                <div className = "divTableCell">Name: {pokemonName} </div>
              </div>

              <div className = "divTableRow">
                <div className = "divTableCell">Type: {pokemonType}</div>
              </div>

              <div className = "divTableRow">
                <div className = "divTableCell">Number: {pokemonIndex}</div>             
              </div>
              </div>
            </div>
        )
      })}
    </div>
    </div>
  );
}

export default App;
