import React, { useState } from 'react'
import PokemonDetails from './components/PokemonDetails'
import axios from 'axios'
import BattleCard from './components/battleCard'
import './App.css';
import ground from './ground.png'
import ground1 from './ground1.png'

const App = () => {

  const [name, setPokemon] = useState("");
  const [pokemonDataLeft, setPokemonDataLeft] = useState([]);
  const [pokemonNameLeft, setPokemonNameLeft] = useState("")
  const [pokemonIDLeft, setPokemonIDLeft] = useState("")
  const [pokemonTypeLeft, setPokemonTypeLeft] = useState("")
  const [pokemonAttackLeft, setPokemonAttackLeft] = useState("")
  const [pokemonDefenseLeft, setPokemonDefenseLeft] = useState("")
  const [pokemonHPLeft, setPokemonHPLeft] = useState("")
  const [pokemonSpAtkLeft, setPokemonSpAtkLeft] = useState("")
  const [pokemonSpDefLeft, setPokemonSpDefLeft] = useState("")
  const [pokemonSpeedLeft, setPokemonSpeedLeft] = useState("")
  const [pokemonMoveOneLeft, setPokemonMoveOneLeft] = useState("")
  const [pokemonMoveTwoLeft, setPokemonMoveTwoLeft] = useState("")
  const [pokemonMoveThreeLeft, setPokemonMoveThreeLeft] = useState("")
  const [pokemonMoveFourLeft, setPokemonMoveFourLeft] = useState("")
  const [pokemonHealthLeft, setPokemonHealthLeft] = useState("")
  const [pokemonNameRight, setPokemonNameRight] = useState("")
  const [pokemonIDRight, setPokemonIDRight] = useState("")
  const [pokemonTypeRight, setPokemonTypeRight] = useState("")
  const [pokemonAttackRight, setPokemonAttackRight] = useState("")
  const [pokemonDefenseRight, setPokemonDefenseRight] = useState("")
  const [pokemonHPRight, setPokemonHPRight] = useState("")
  const [pokemonSpAtkRight, setPokemonSpAtkRight] = useState("")
  const [pokemonSpDefRight, setPokemonSpDefRight] = useState("")
  const [pokemonSpeedRight, setPokemonSpeedRight] = useState("")
  const [pokemonDataRight, setPokemonDataRight] = useState([]);
  const [pokemonMoveOneRight, setPokemonMoveOneRight] = useState("")
  const [pokemonMoveTwoRight, setPokemonMoveTwoRight] = useState("")
  const [pokemonMoveThreeRight, setPokemonMoveThreeRight] = useState("")
  const [pokemonMoveFourRight, setPokemonMoveFourRight] = useState("")
  const [pokemonHealthRight, setPokemonHealthRight] = useState("")
  const containerBackgroundLeft = pokemonTypeLeft + " detailcontainerNew";
  const containerBackgroundRight = pokemonTypeRight + " detailcontainerNew";

  const getPokemonLeft = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonNameLeft(res.data.name)
      setPokemonIDLeft(res.data.id)
      setPokemonTypeLeft(res.data.types[0].type.name)
      setPokemonHPLeft(res.data.stats[0].base_stat)
      setPokemonAttackLeft(res.data.stats[1].base_stat)
      setPokemonDefenseLeft(res.data.stats[2].base_stat)
      setPokemonSpAtkLeft(res.data.stats[3].base_stat)
      setPokemonSpDefLeft(res.data.stats[4].base_stat)
      setPokemonSpeedLeft(res.data.stats[5].base_stat)
      setPokemonMoveOneLeft(res.data.moves[0].move.name)
      setPokemonMoveTwoLeft(res.data.moves[1].move.name)
      setPokemonMoveThreeLeft(res.data.moves[2].move.name)
      setPokemonMoveFourLeft(res.data.moves[3].move.name)
      setPokemonDataLeft(toArray);
    } catch (e) {
      console.log(e)
    }
  }

  const getPokemonRight = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonNameRight(res.data.name)
      setPokemonIDRight(res.data.id)
      setPokemonHPRight(res.data.stats[0].base_stat)
      setPokemonAttackRight(res.data.stats[1].base_stat)
      setPokemonDefenseRight(res.data.stats[2].base_stat)
      setPokemonSpAtkRight(res.data.stats[3].base_stat)
      setPokemonSpDefRight(res.data.stats[4].base_stat)
      setPokemonSpeedRight(res.data.stats[5].base_stat)
      setPokemonTypeRight(res.data.types[0].type.name)
      setPokemonMoveOneRight(res.data.moves[0].move.name)
      setPokemonMoveTwoRight(res.data.moves[1].move.name)
      setPokemonMoveThreeRight(res.data.moves[2].move.name)
      setPokemonMoveFourRight(res.data.moves[3].move.name)
      setPokemonDataRight(toArray);
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

  const handleSubmitLeft = (e) => {
    e.preventDefault();
    getPokemonLeft();
    document.getElementById("output").value = "";
  };

  const handleSubmitRight = (e) => {
    e.preventDefault();
    getPokemonRight();
    document.getElementById("output").value = "";
  };

  const HealthZeroCheck = () => {
    var v1 = document.getElementById('healthbarRight');
    var v2 = document.getElementById('healthbarLeft');
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
    var v1 = document.getElementById('healthbarLeft');
    v1.value -= (Math.random() * (7) + 7) << 0;
    setPokemonHealthLeft(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackAnimationRight");
      element.classList.add("rightMoveOneAnimation");
      setTimeout(() => {
        element.classList.remove("rightMoveOneAnimation");
      }, 700)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioLeftMoveOne")
      audio.play();
    }

    HealthZeroCheck();
  }

  const calcMoveOneLeft = async () => {
    var v1 = document.getElementById('healthbarRight');
    v1.value -= (Math.random() * (12) + 12) << 0;
    setPokemonHealthRight(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackAnimationLeft");
      element.classList.add("leftMoveOneAnimation");
      setTimeout(() => {
        element.classList.remove("leftMoveOneAnimation");
      }, 700)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioLeftMoveOne")
      audio.play();
    }

    HealthZeroCheck();
  }

  const calcMoveTwoRight = async () => {
    var v1 = document.getElementById('healthbarLeft');
    v1.value -= (Math.random() * (16) + 16) << 0;
    setPokemonHealthLeft(v1.value);

    if (v1.value > 0) {
      var audio = document.getElementById("audioRightMoveTwo")
      audio.play();
    }

    if (v1.value > 0) {
      var element = document.getElementById("attackAnimationLeft");
      element.classList.add("rightMoveTwoAnimation");
      setTimeout(() => {
        element.classList.remove("rightMoveTwoAnimation");
      }, 400)
    }

    HealthZeroCheck();
  }

  const calcMoveTwoLeft = async () => {
    var v1 = document.getElementById('healthbarRight');
    v1.value -= (Math.random() * (6) + 6) << 0;
    setPokemonHealthRight(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackAnimationRight");
      element.classList.add("leftMoveTwoAnimation");
      setTimeout(() => {
        element.classList.remove("leftMoveTwoAnimation");
      }, 400)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioLeftMoveTwo")
      audio.play();
    }

    HealthZeroCheck();
  }

  const calcMoveThreeRight = async () => {
    var v1 = document.getElementById('healthbarLeft');
    v1.value -= (Math.random() * (8) + 8) << 0;
    setPokemonHealthLeft(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackAnimationLeft");
      element.classList.add("rightMoveThreeAnimation");
      setTimeout(() => {
        element.classList.remove("rightMoveThreeAnimation");
      }, 2000)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioRightMoveThree")
      audio.play();
    }

    HealthZeroCheck();
  }

  const calcMoveThreeLeft = async () => {
    var v1 = document.getElementById('healthbarRight');
    v1.value -= (Math.random() * (19) + 19) << 0;
    setPokemonHealthRight(v1.value);

    if (v1.value > 0) {
      var element = document.getElementById("attackAnimationRight");
      element.classList.add("leftMoveThreeAnimation");
      setTimeout(() => {
        element.classList.remove("leftMoveThreeAnimation");
      }, 1700)
    }

    if (v1.value > 0) {
      var audio = document.getElementById("audioLeftMoveThree")
      audio.play();
    }

    HealthZeroCheck();
  }

  const calcMoveFourRight = async () => {
    var v1 = document.getElementById('healthbarRight');
    v1.value += (Math.random() * (20) + 15) << 0;
    setPokemonHealthRight(v1.value);

    var audio = document.getElementById("audioRightMoveFour")
    audio.play();

    var element = document.getElementById("attackAnimationRight");
    element.classList.add("rightMoveFourAnimation");
    setTimeout(() => {
      element.classList.remove("rightMoveFourAnimation");
    }, 2000)
  }

  const calcMoveFourLeft = async () => {
    var v1 = document.getElementById('healthbarLeft');
    v1.value += (Math.random() * (10) + 20) << 0;
    setPokemonHealthLeft(v1.value);

    var audio = document.getElementById("audioLeftMoveFour")
    audio.play();

    var element = document.getElementById("attackAnimationLeft");
    element.classList.add("leftMoveFourAnimation");
    setTimeout(() => {
      element.classList.remove("leftMoveFourAnimation");
    }, 2000)
  }

  const resetHealth = async () => {
    var v1 = document.getElementById('healthbarLeft');
    v1.value = v1.value + (100 - v1.value);
    var v2 = document.getElementById('healthbarRight');
    v2.value = v2.value + (100 - v2.value);

    setPokemonHealthLeft(document.getElementById("healthbarLeft").value);
    setPokemonHealthRight(document.getElementById("healthbarRight").value);
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
          <button className="button" onClick={handleSubmitRight}>Pokemon #1</button>
          <button className="button" onClick={handleSubmitLeft}>Pokemon #2</button>
          <div className="alldiv">

            {pokemonDataLeft.map((data, index) =>
              <BattleCard
                ground = {ground1}
                groundPosition = {"groundPosition2"}
                attackAudio1={"audioLeftMoveOne"}
                attackAudioLink1={"http://127.0.0.1:5500/Pokedex/pokedex/src/woosh.flac"}
                attackAudio2={"audioLeftMoveTwo"}
                attackAudioLink2={"http://127.0.0.1:5500/Pokedex/pokedex/src/leftMoveTwoAnimation.mp3"}
                attackAudio3={"audioLeftMoveThree"}
                attackAudioLink3={"http://127.0.0.1:5500/Pokedex/pokedex/src/thunder.wav"}
                attackAudio4={"audioLeftMoveFour"}
                attackAudioLink4={"http://127.0.0.1:5500/Pokedex/pokedex/src/rightMoveFourAnimation.wav"}
                healthID={"healthbarLeft"}
                attackID={"attackAnimationLeft"}
                imagePosition={"pokemonBack"}
                image={data.sprites["back_shiny"]}
                health={pokemonHealthLeft}
                healthDepletedMethod={HealthZeroCheck}
                moveOneCalculation={calcMoveOneLeft}
                moveOne={pokemonMoveOneLeft}
                moveTwoCalculation={calcMoveTwoLeft}
                moveTwo={pokemonMoveTwoLeft}
                moveThreeCalculation={calcMoveThreeLeft}
                moveThree={pokemonMoveThreeLeft}
                moveFourCalculation={calcMoveFourLeft}
                moveFour={pokemonMoveFourLeft}
                container={containerBackgroundLeft}
                picture={data.sprites["front_default"]}
                id={pokemonIDLeft}
                name={pokemonNameLeft}
                type={pokemonTypeLeft}
                hp={pokemonHPLeft}
                attack={pokemonAttackLeft}
                defense={pokemonDefenseLeft}
                spatk={pokemonSpAtkLeft}
                spdef={pokemonSpDefLeft}
                speed={pokemonSpeedLeft}
                key={index}
              />)}

            {pokemonDataRight.map((data, index) =>
              <BattleCard
                groundPosition={"groundPosition"}
                ground = {ground}  
                attackAudio1={"audioRightMoveOne"}
                attackAudioLink1={"http://127.0.0.1:5500/Pokedex/pokedex/src/woosh.flac"}
                attackAudio2={"audioRightMoveTwo"}
                attackAudioLink2={"http://127.0.0.1:5500/Pokedex/pokedex/src/slash.ogg"}
                attackAudio3={"audioRightMoveThree"}
                attackAudioLink3={"http://127.0.0.1:5500/Pokedex/pokedex/src/rightMoveThreeAnimation.wav"}
                attackAudio4={"audioRightMoveFour"}
                attackAudioLink4={"http://127.0.0.1:5500/Pokedex/pokedex/src/holy.wav"}
                healthID={"healthbarRight"}
                attackID={"attackAnimationRight"}
                imagePosition={"pokemonFront"}
                image={data.sprites["front_shiny"]}
                health={pokemonHealthRight}
                healthDepletedMethod={HealthZeroCheck}
                moveOneCalculation={calcMoveOneRight}
                moveOne={pokemonMoveOneRight}
                moveTwoCalculation={calcMoveTwoRight}
                moveTwo={pokemonMoveTwoRight}
                moveThreeCalculation={calcMoveThreeRight}
                moveThree={pokemonMoveThreeRight}
                moveFourCalculation={calcMoveFourRight}
                moveFour={pokemonMoveFourRight}
                container={containerBackgroundRight}
                picture={data.sprites["front_default"]}
                id={pokemonIDRight}
                name={pokemonNameRight}
                type={pokemonTypeRight}
                hp={pokemonHPRight}
                attack={pokemonAttackRight}
                defense={pokemonDefenseRight}
                spatk={pokemonSpAtkRight}
                spdef={pokemonSpDefRight}
                speed={pokemonSpeedRight}
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
