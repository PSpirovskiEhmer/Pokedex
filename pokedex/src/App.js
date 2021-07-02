import React, { useState } from 'react'
import PokemonDetails from './components/PokemonDetails'
import axios from 'axios'
import BattleCard from './components/battleCard'
import './App.css';
import ground from './ground.png'

const App = () => {

  const [name, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonID, setPokemonID] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [pokemonAttack, setPokemonAttack] = useState("")
  const [pokemonDefense, setPokemonDefense] = useState("")
  const [pokemonHP, setPokemonHP] = useState("")
  const [pokemonSpatk, setPokemonSpatk] = useState("")
  const [pokemonSpdef, setPokemonSpdef] = useState("")
  const [pokemonSpeed, setPokemonSpeed] = useState("")
  const [pokemonNameTwo, setPokemonNameTwo] = useState("")
  const [pokemonIDTwo, setPokemonIDTwo] = useState("")
  const [pokemonTypeTwo, setPokemonTypeTwo] = useState("")
  const [pokemonAttackTwo, setPokemonAttackTwo] = useState("")
  const [pokemonDefenseTwo, setPokemonDefenseTwo] = useState("")
  const [pokemonHPTwo, setPokemonHPTwo] = useState("")
  const [pokemonSpatkTwo, setPokemonSpatkTwo] = useState("")
  const [pokemonSpdefTwo, setPokemonSpdefTwo] = useState("")
  const [pokemonSpeedTwo, setPokemonSpeedTwo] = useState("")
  const [pokemonMove1, setPokemonMove1] = useState("")
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
  const conteffectNew = pokemonType + " detailcontainerNew";
  const conteffectNewTwo = pokemonTypeTwo + " detailcontainerNew";

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonName(res.data.name)
      setPokemonID(res.data.id)
      setPokemonType(res.data.types[0].type.name)
      setPokemonHP(res.data.stats[0].base_stat)
      setPokemonAttack(res.data.stats[1].base_stat)
      setPokemonDefense(res.data.stats[2].base_stat)
      setPokemonSpatk(res.data.stats[3].base_stat)
      setPokemonSpdef(res.data.stats[4].base_stat)
      setPokemonSpeed(res.data.stats[5].base_stat)
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
      setPokemonNameTwo(res.data.name)
      setPokemonIDTwo(res.data.id)
      setPokemonHPTwo(res.data.stats[0].base_stat)
      setPokemonAttackTwo(res.data.stats[1].base_stat)
      setPokemonDefenseTwo(res.data.stats[2].base_stat)
      setPokemonSpatkTwo(res.data.stats[3].base_stat)
      setPokemonSpdefTwo(res.data.stats[4].base_stat)
      setPokemonSpeedTwo(res.data.stats[5].base_stat)
      setPokemonTypeTwo(res.data.types[0].type.name)
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

  const handleSubmitForm = (e) => {
    e.preventDefault();
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

  const ishealthzero = () => {
    var v1 = document.getElementById('healthFront');
    var v2 = document.getElementById('healthBack');
    if (v1.value === 0) {
      alert("You win! The opposing pokemon has fainted!");
      resetHealth();
    }
    if (v2.value === 0) {
      alert("You win! The opposing pokemon has fainted!");
      resetHealth();
    }
  }

  const calcMoveOneRight = async () => {
    var v1 = document.getElementById('healthBack');
    v1.value -= (Math.random() * (7) + 7) << 0;
    setPokemonHealthLeft(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackone");
      element.classList.add("attackRight");
      setTimeout(() => {
        element.classList.remove("attackRight");
      }, 700)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioleftone")
      audio.play();
    }

    ishealthzero();
  }

  const calcMoveOneLeft = async () => {
    var v1 = document.getElementById('healthFront');
    v1.value -= (Math.random() * (12) + 12) << 0;
    setPokemonHealthRight(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attacktwo");
      element.classList.add("attackLeft");
      setTimeout(() => {
        element.classList.remove("attackLeft");
      }, 700)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioleftone")
      audio.play();
    }

    ishealthzero();
  }

  const calcMoveTwoRight = async () => {
    var v1 = document.getElementById('healthBack');
    v1.value -= (Math.random() * (16) + 16) << 0;
    setPokemonHealthLeft(v1.value);

    if (v1.value > 0) {
      var audio = document.getElementById("audiorighttwo")
      audio.play();
    }

    if (v1.value > 0) {
      var element = document.getElementById("attacktwo");
      element.classList.add("scratch");
      setTimeout(() => {
        element.classList.remove("scratch");
      }, 400)
    }

    ishealthzero();
  }

  const calcMoveTwoLeft = async () => {
    var v1 = document.getElementById('healthFront');
    v1.value -= (Math.random() * (6) + 6) << 0;
    setPokemonHealthRight(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackone");
      element.classList.add("bite");
      setTimeout(() => {
        element.classList.remove("bite");
      }, 400)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audiolefttwo")
      audio.play();
    }

    ishealthzero();
  }

  const calcMoveThreeRight = async () => {
    var v1 = document.getElementById('healthBack');
    v1.value -= (Math.random() * (8) + 8) << 0;
    setPokemonHealthLeft(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attacktwo");
      element.classList.add("tornado");
      setTimeout(() => {
        element.classList.remove("tornado");
      }, 2000)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audiorightthree")
      audio.play();
    }

    ishealthzero();
  }

  const calcMoveThreeLeft = async () => {
    var v1 = document.getElementById('healthFront');
    v1.value -= (Math.random() * (19) + 19) << 0;
    setPokemonHealthRight(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackone");
      element.classList.add("strike");
      setTimeout(() => {
        element.classList.remove("strike");
      }, 1700)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioleftthree")
      audio.play();
    }

    ishealthzero();
  }

  const calcMoveFourRight = async () => {
    var v1 = document.getElementById('healthFront');
    v1.value += (Math.random() * (20) + 15) << 0;
    setPokemonHealthRight(v1.value);

    var audio = document.getElementById("audiorightfour")
    audio.play();

    var element = document.getElementById("attackone");
    element.classList.add("heal");
    setTimeout(() => {
      element.classList.remove("heal");
    }, 2000)
  }

  const calcMoveFourLeft = async () => {
    var v1 = document.getElementById('healthBack');
    v1.value += (Math.random() * (10) + 20) << 0;
    setPokemonHealthLeft(v1.value);

    var audio = document.getElementById("audioleftfour")
    audio.play();

    var element = document.getElementById("attacktwo");
    element.classList.add("greenheal");
    setTimeout(() => {
      element.classList.remove("greenheal");
    }, 2000)
  }

  const resetHealth = async () => {
    var v1 = document.getElementById('healthBack');
    v1.value = v1.value + (100 - v1.value);
    var v2 = document.getElementById('healthFront');
    v2.value = v2.value + (100 - v2.value);

    setPokemonHealthLeft(document.getElementById("healthBack").value);
    setPokemonHealthRight(document.getElementById("healthFront").value);
  }

  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=9')

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

    <div>
      <div className="container-pokemon">
        <div className="app">
          <form onSubmit={handleSubmitForm}>
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

            {pokemonData.map((data, index) =>
              <BattleCard
                ground = {ground}
                groundPosition = {"groundPosition2"}
                attackAudio1={"audioleftone"}
                attackAudioLink1={"http://127.0.0.1:5500/Pokedex/pokedex/src/woosh.flac"}
                attackAudio2={"audiolefttwo"}
                attackAudioLink2={"http://127.0.0.1:5500/Pokedex/pokedex/src/bite.mp3"}
                attackAudio3={"audioleftthree"}
                attackAudioLink3={"http://127.0.0.1:5500/Pokedex/pokedex/src/thunder.wav"}
                attackAudio4={"audioleftfour"}
                attackAudioLink4={"http://127.0.0.1:5500/Pokedex/pokedex/src/heal.wav"}
                healthID={"healthBack"}
                attackID={"attacktwo"}
                imagePosition={"pokemonBack"}
                image={data.sprites["back_shiny"]}
                health={pokemonHealthLeft}
                healthDepletedMethod={ishealthzero}
                checkmove1={calcMoveOneLeft}
                move1={pokemonMove1}
                checkmove2={calcMoveTwoLeft}
                move2={pokemonMove2}
                checkmove3={calcMoveThreeLeft}
                move3={pokemonMove3}
                checkmove4={calcMoveFourLeft}
                move4={pokemonMove4}
                cont={conteffectNew}
                picture={data.sprites["front_default"]}
                id={pokemonID}
                name={pokemonName}
                type={pokemonType}
                hp={pokemonHP}
                attack={pokemonAttack}
                defense={pokemonDefense}
                spatk={pokemonSpatk}
                spdef={pokemonSpdef}
                speed={pokemonSpeed}
                key={index}
              />)}

            {pokemonDataTwo.map((data, index) =>
              <BattleCard
                groundPosition={"groundPosition"}
                ground = {ground}  
                attackAudio1={"audiorightone"}
                attackAudioLink1={"http://127.0.0.1:5500/Pokedex/pokedex/src/woosh.flac"}
                attackAudio2={"audiorighttwo"}
                attackAudioLink2={"http://127.0.0.1:5500/Pokedex/pokedex/src/slash.ogg"}
                attackAudio3={"audiorightthree"}
                attackAudioLink3={"http://127.0.0.1:5500/Pokedex/pokedex/src/tornado.wav"}
                attackAudio4={"audiorightfour"}
                attackAudioLink4={"http://127.0.0.1:5500/Pokedex/pokedex/src/holy.wav"}
                healthID={"healthFront"}
                attackID={"attackone"}
                imagePosition={"pokemonFront"}
                image={data.sprites["front_shiny"]}
                health={pokemonHealthRight}
                healthDepletedMethod={ishealthzero}
                checkmove1={calcMoveOneRight}
                move1={pokemonMove1Two}
                checkmove2={calcMoveTwoRight}
                move2={pokemonMove2Two}
                checkmove3={calcMoveThreeRight}
                move3={pokemonMove3Two}
                checkmove4={calcMoveFourRight}
                move4={pokemonMove4Two}
                cont={conteffectNewTwo}
                picture={data.sprites["front_default"]}
                id={pokemonIDTwo}
                name={pokemonNameTwo}
                type={pokemonTypeTwo}
                hp={pokemonHPTwo}
                attack={pokemonAttackTwo}
                defense={pokemonDefenseTwo}
                spatk={pokemonSpatkTwo}
                spdef={pokemonSpdefTwo}
                speed={pokemonSpeedTwo}
                key={index}
              />)}
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
              hp={pokemon.stats[0].base_stat}
              attack={pokemon.stats[1].base_stat}
              defense={pokemon.stats[2].base_stat}
              spatk={pokemon.stats[3].base_stat}
              spdef={pokemon.stats[4].base_stat}
              speed={pokemon.stats[5].base_stat}
              key={index}
            />)}
          <button className="load-more" onClick={() => getAllPokemon()}>Load Pokémon</button>
        </div>
      </div>
    </div>
  );
}

export default App;
