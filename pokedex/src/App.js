import React, { useState, Component } from "react";
import './App.css';
import axios from "axios";

const App = () => {
  const [name, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")
  const [pokemonIndex, setPokemonIndex] = useState("")
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonMove1, setPokemonMove1] = useState("")
  const [pokemonMove2, setPokemonMove2] = useState("")
  const [pokemonMove3, setPokemonMove3] = useState("")
  const [pokemonMove4, setPokemonMove4] = useState("")


  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      setPokemonIndex(res.data.id)
      setPokemonName(res.data.species.name)
      setPokemonMove1(res.data.moves[0].move.name)
      setPokemonMove2(res.data.moves[1].move.name)
      setPokemonMove3(res.data.moves[2].move.name)
      setPokemonMove4(res.data.moves[3].move.name)
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
    e.target.reset();
  };

  return (

    <div className="container-pokemon">
      <div className="app">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Pokemon name: "
            />
          </label>
        </form>

        {pokemonData.map((data) => {
          return (
            <div className="containerBattle">
              <div className="pokemonPos">
                <img className="pokemonBack" src={data.sprites["back_shiny"]} alt="Couldn't load pokemon" />
                <img className="pokemonFront" src={data.sprites["front_shiny"]} alt="Couldn't load pokemon" />
              </div>
              <div className="divTable">

                <div className="divTableBody"></div>

                <div className="divTableRow">
                  <div className="divTableCell">{pokemonMove1} </div>
                </div>

                <div className="divTableRow">
                  <div className="divTableCell">{pokemonMove2}</div>
                </div>

                <div className="divTableRow">
                  <div className="divTableCell">{pokemonMove3}</div>
                </div>

                <div className="divTableRow">
                  <div className="divTableCell">{pokemonMove4}</div>
                </div>

              </div>

              <div className="divTable">

                <div className="divTableBody"></div>

                <div className="divTableRow">
                  <div className="divTableCell">Name: {pokemonName} </div>
                </div>

                <div className="divTableRow">
                  <div className="divTableCell">Type: {pokemonType}</div>
                </div>

                <div className="divTableRow">
                  <div className="divTableCell">Number: #{pokemonIndex}</div>
                </div>

              </div>

              <div className="pokemonCard">
                <ul className="container float">
                  <li className="item float-item">
                  <img className="pokemonFrontCard" src={data.sprites["front_shiny"]} alt="Couldn't load pokemon" /> 
                  <div className = "pokemonInfoIndex">#{pokemonIndex}</div> <div className = "pokemonInfoName">{pokemonName}</div> <div className = "pokemonInfoType">{pokemonType}</div>
                  </li>
                  <li className="item float-item">Pokomon</li>
                </ul>
              </div>

            </div>
          )
        })}
      </div>
      <div className="container"><dashboard></dashboard></div>
    </div>

  );
}

export default App;
