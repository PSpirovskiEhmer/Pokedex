import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";

const App = () => {
  const [pokemon, setPokemon] = useState("Pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const[pokemonType, setPokemonType] = useState("")

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className="app">
      <h1>Torterra</h1>
    </div>
  );
}

export default App;
