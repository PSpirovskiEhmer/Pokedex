import React, { useState } from 'react'
import PokemonDetails from './components/PokemonDetails'
import axios from 'axios'
import './App.css';

const App = () => {

  const [name, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonMove1, setPokemonMove1] = useState("")
  // const [pokemonMove1power, setPokemonMove1power] = useState("")
  const [pokemonMove2, setPokemonMove2] = useState("")
  const [pokemonMove3, setPokemonMove3] = useState("")
  const [pokemonMove4, setPokemonMove4] = useState("")
  const [pokemonDataTwo, setPokemonDataTwo] = useState([]);
  const [pokemonMove1Two, setPokemonMove1Two] = useState("")
  const [pokemonMove2Two, setPokemonMove2Two] = useState("")
  const [pokemonMove3Two, setPokemonMove3Two] = useState("")
  const [pokemonMove4Two, setPokemonMove4Two] = useState("")
  const [pokemonHealthLeft, setPokemonHealthLeft] = useState("")
  const [pokemonHealthRight, setPokemonHealthRight] = useState("")

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonMove1(res.data.moves[0].move.name)
      setPokemonMove2(res.data.moves[1].move.name)
      setPokemonMove3(res.data.moves[2].move.name)
      setPokemonMove4(res.data.moves[3].move.name)
      setPokemonData(toArray);
    } catch (e) {
      console.log(e)
    }
  }

  const getPokemonTwo = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonMove1Two(res.data.moves[0].move.name)
      setPokemonMove2Two(res.data.moves[1].move.name)
      setPokemonMove3Two(res.data.moves[2].move.name)
      setPokemonMove4Two(res.data.moves[3].move.name)
      setPokemonDataTwo(toArray);
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
    document.getElementById("output").value = "";
  };

  const handleSubmitTwo = (e) => {
    e.preventDefault();
    getPokemonTwo();
    document.getElementById("output").value = "";
  };

  const calcMoveOneRight = async () => {
    var v1 = document.getElementById('healthBack').value;
    document.getElementById("healthBack").value = v1 - (Math.random() * (7) + 7) << 0;
    setPokemonHealthLeft(document.getElementById("healthBack").value);

    var element = document.getElementById("attackone");
    element.classList.add("attackRight");
    setTimeout(() => {
      element.classList.remove("attackRight");
    }, 700)

    if (v1 === 0) {
      alert("Cannot attack the pokemon as the opposing pokemon has fainted!");
    }
  }

  const calcMoveOneLeft = async () => {
    var v1 = document.getElementById('healthFront').value;
    document.getElementById("healthFront").value = v1 - (Math.random() * (12) + 12) << 0;
    setPokemonHealthRight(document.getElementById("healthFront").value);

    var element = document.getElementById("attacktwo");
    element.classList.add("attackLeft");
    setTimeout(() => {
      element.classList.remove("attackLeft");
    }, 700)

    if (v1 === 0) {
      alert("Cannot attack the pokemon as the opposing pokemon has fainted!");
    }
  }

  const calcMoveTwoRight = async () => {
    var v1 = document.getElementById('healthBack').value;
    document.getElementById("healthBack").value = v1 - (Math.random() * (16) + 16) << 0;
    setPokemonHealthLeft(document.getElementById("healthBack").value);

    var element = document.getElementById("attacktwo");
    element.classList.add("scratch");
    setTimeout(() => {
      element.classList.remove("scratch");
    }, 400)

    if (v1 === 0) {
      alert("Cannot attack the pokemon as the opposing pokemon has fainted!");
    }
  }

  const calcMoveTwoLeft = async () => {
    var v1 = document.getElementById('healthFront').value;
    document.getElementById("healthFront").value = v1 - (Math.random() * (6) + 6) << 0;
    setPokemonHealthRight(document.getElementById("healthFront").value);

    var element = document.getElementById("attackone");
    element.classList.add("bite");
    setTimeout(() => {
      element.classList.remove("bite");
    }, 400)

    if (v1 === 0) {
      alert("Cannot attack the pokemon as the opposing pokemon has fainted!");
    }
  }

  const calcMoveThreeRight = async () => {
    var v1 = document.getElementById('healthBack').value;
    document.getElementById("healthBack").value = v1 - (Math.random() * (8) + 8) << 0;
    setPokemonHealthLeft(document.getElementById("healthBack").value);

    var element = document.getElementById("attacktwo");
    element.classList.add("tornado");
    setTimeout(() => {
      element.classList.remove("tornado");
    }, 700)

    if (v1 === 0) {
      alert("Cannot attack the pokemon as the opposing pokemon has fainted!");
    }
  }

  const calcMoveThreeLeft = async () => {
    var v1 = document.getElementById('healthFront').value;
    document.getElementById("healthFront").value = v1 - (Math.random() * (19) + 19) << 0;
    setPokemonHealthRight(document.getElementById("healthFront").value);

    var element = document.getElementById("attackone");
    element.classList.add("strike");
    setTimeout(() => {
      element.classList.remove("strike");
    }, 700)

    if (v1 === 0) {
      alert("Cannot attack the pokemon as the opposing pokemon has fainted!");
    }
  }

  const calcMoveFourRight = async () => {
    var v1 = document.getElementById('healthFront').value;
    document.getElementById("healthFront").value = v1 + (Math.random() * (20) + 15) << 0;
    setPokemonHealthRight(document.getElementById("healthFront").value);

    var element = document.getElementById("attackone");
    element.classList.add("heal");
    setTimeout(() => {
      element.classList.remove("heal");
    }, 800)
  }

  const calcMoveFourLeft = async () => {
    var v1 = document.getElementById('healthBack').value;
    document.getElementById("healthBack").value = v1 + (Math.random() * (10) + 20) << 0;
    setPokemonHealthLeft(document.getElementById("healthBack").value);

    var element = document.getElementById("attacktwo");
    element.classList.add("greenheal");
    setTimeout(() => {
      element.classList.remove("greenheal");
    }, 400)
  }

  const resetHealth = async () => {
    var v1 = document.getElementById('healthBack').value;
    document.getElementById("healthBack").value = v1 + (100 - v1);
    var v2 = document.getElementById('healthFront').value;
    document.getElementById("healthFront").value = v2 + (100 - v2);

    setPokemonHealthLeft(document.getElementById("healthBack").value);
    setPokemonHealthRight(document.getElementById("healthFront").value);
  }

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=10')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results) {
      results.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemon(listArray => [...listArray, data])
      })
    }
    createPokemonObject(data.results)
  }

  return (

    <div className="app-contaner">
      <div className="container-pokemon">
        <div className="app">
          <form>
            <label>
              <input
                id="output"
                type="text"
                onChange={handleChange}
                placeholder="Pokemon name: "
              />
            </label>
          </form>
          <button className="button" onClick={handleSubmitTwo}>Pokemon #1</button>
          <button className="button" onClick={handleSubmit}>Pokemon #2</button>
          <div className="alldiv">

            {pokemonDataTwo.map((data) => {
              return (
                <div className="containerBattle1">
                  <div className="pokemonPos">
                    <img id="attackone" className="pokemonFront" src={data.sprites["front_shiny"]} alt="Couldn't load pokemon" />
                  </div>
                  <div className="divTable">
                    <div className="divTableBody">
                      {pokemonHealthRight}/100 &nbsp;&nbsp;
                      <progress id="healthFront" value="100" max="100"></progress>

                      <div className="divTableRow">
                        <button onClick={calcMoveOneRight} className="divTableCell1">{pokemonMove1Two}</button>
                        <button onClick={calcMoveTwoRight} className="divTableCell2">{pokemonMove2Two}</button>
                      </div>
                      <div className="divTableRow">
                        <button onClick={calcMoveThreeRight} className="divTableCell1">{pokemonMove3Two}</button>
                        <button onClick={calcMoveFourRight} className="divTableCell2">{pokemonMove4Two}</button>
                      </div>

                    </div>
                  </div>
                </div>
              )
            })}

            {pokemonData.map((data) => {
              return (
                <div className="containerBattle2">
                  <div className="pokemonPos">
                    <img id="attacktwo" className="pokemonBack" src={data.sprites["back_shiny"]} alt="Couldn't load pokemon" />
                  </div>
                  <div className="divTable">

                    <div className="divTableBody">
                      {pokemonHealthLeft}/100 &nbsp;&nbsp;
                      <progress id="healthBack" value="100" max="100"></progress>
                      <div className="divTableRow">
                        <button onClick={calcMoveOneLeft} className="divTableCell1">{pokemonMove1}</button>
                        <button onClick={calcMoveTwoLeft} className="divTableCell2">{pokemonMove2}</button>
                      </div>

                      <div className="divTableRow">
                        <button onClick={calcMoveThreeLeft} className="divTableCell1">{pokemonMove3}</button>
                        <button onClick={calcMoveFourLeft} className="divTableCell2">{pokemonMove4}</button>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}
          </div>
          <button onClick={resetHealth} className="reset">Reset HP</button>
        </div>
      </div>
      <h1 className="headertext">Pokédex</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemon.map((pokemon, index) =>
            <PokemonDetails
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_shiny}
              type={pokemon.types[0].type.name}
              key={index}
            />)}
          <button className="load-more" onClick={() => getAllPokemon()}>Load Pokémon</button>
        </div>
      </div>
    </div>
  );
}

export default App;
