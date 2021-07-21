import React, { useState } from 'react'
import axios from 'axios'
import BattleCard from '../BattleCard/battleCard.js'
import ground from '../../ground.png'
import ground1 from '../../ground1.png'
import woosh from '../../woosh.flac'
import bite from '../../bite.mp3'
import heal from '../../heal.wav'
import holy from '../../holy.wav'
import slash from '../../slash.ogg'
import thunder from '../../thunder.wav'
import tornado from '../../tornado.wav'

const Input = () => {
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
  const [pokemonHealthRight, setPokemonHealthRight] = useState("100")
  const [pokemonHealthLeft, setPokemonHealthLeft] = useState("100")
  const [onePPCountRight, setOnePPCountRight] = useState("25")
  const [twoPPCountRight, setTwoPPCountRight] = useState("5")
  const [threePPCountRight, setThreePPCountRight] = useState("10")
  const [fourPPCountRight, setFourPPCountRight] = useState("5")
  const [onePPCountLeft, setOnePPCountLeft] = useState("25")
  const [twoPPCountLeft, setTwoPPCountLeft] = useState("10")
  const [threePPCountLeft, setThreePPCountLeft] = useState("5")
  const [fourPPCountLeft, setFourPPCountLeft] = useState("5")
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
      setTimeout(() => {
        alert("You win! The opposing pokemon has fainted!");
        resetHealth();
      }, 50)
    }
    if (v2.value === 0) {
      setTimeout(() => {
        alert("You win! The opposing pokemon has fainted!");
        resetHealth();
      }, 50)
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

    var oneRight = document.getElementById("buttonOneRightID")

    if (oneRight.value > 0) {
      oneRight.value -= 1;
      setOnePPCountRight(oneRight.value)
    }
    if (oneRight.value === 0) {
      document.getElementById("buttonOneRightID").disabled = true;
    }
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

    var oneLeft = document.getElementById("buttonOneLeftID")

    if (oneLeft.value > 0) {
      oneLeft.value -= 1;
      setOnePPCountLeft(oneLeft.value)
    }
    if (oneLeft.value === 0) {
      document.getElementById("buttonOneLeftID").disabled = true;
    }
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

    var twoRight = document.getElementById("buttonTwoRightID")

    if (twoRight.value > 0) {
      twoRight.value -= 1;
      setTwoPPCountRight(twoRight.value)
    }
    if (twoRight.value === 0) {
      document.getElementById("buttonTwoRightID").disabled = true;
    }
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

    var twoLeft = document.getElementById("buttonTwoLeftID")

    if (twoLeft.value > 0) {
      twoLeft.value -= 1;
      setTwoPPCountLeft(twoLeft.value)
    }
    if (twoLeft.value === 0) {
      document.getElementById("buttonTwoLeftID").disabled = true;
    }
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

    var threeRight = document.getElementById("buttonThreeRightID")

    if (threeRight.value > 0) {
      threeRight.value -= 1;
      setThreePPCountRight(threeRight.value)
    }
    if (threeRight.value === 0) {
      document.getElementById("buttonThreeRightID").disabled = true;
    }
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

    var threeLeft = document.getElementById("buttonThreeLeftID")

    if (threeLeft.value > 0) {
      threeLeft.value -= 1;
      setThreePPCountLeft(threeLeft.value)
    }
    if (threeLeft.value === 0) {
      document.getElementById("buttonThreeLeftID").disabled = true;
    }
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

    var fourRight = document.getElementById("buttonFourRightID")

    if (fourRight.value > 0) {
      fourRight.value -= 1;
      setFourPPCountRight(fourRight.value)
    }
    if (fourRight.value === 0) {
      document.getElementById("buttonFourRightID").disabled = true;
    }
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

    var fourLeft = document.getElementById("buttonFourLeftID")

    if (fourLeft.value > 0) {
      fourLeft.value -= 1;
      setFourPPCountLeft(fourLeft.value)
    }
    if (fourLeft.value === 0) {
      document.getElementById("buttonFourLeftID").disabled = true;
    }
  }

  const resetHealth = async () => {
    var v1 = document.getElementById('healthbarLeft');
    v1.value = v1.value + (100 - v1.value);

    var v2 = document.getElementById('healthbarRight');
    v2.value = v2.value + (100 - v2.value);

    var oneRight = document.getElementById("buttonOneRightID");
    oneRight.value = 25;
    document.getElementById("buttonOneRightID").disabled = false;

    var twoRight = document.getElementById("buttonTwoRightID");
    twoRight.value = 5;
    document.getElementById("buttonTwoRightID").disabled = false;

    var threeRight = document.getElementById("buttonThreeRightID");
    threeRight.value = 10;
    document.getElementById("buttonThreeRightID").disabled = false;

    var fourRight = document.getElementById("buttonFourRightID");
    fourRight.value = 5;
    document.getElementById("buttonFourRightID").disabled = false;

    var oneLeft = document.getElementById("buttonOneLeftID");
    oneLeft.value = 25;
    document.getElementById("buttonOneLeftID").disabled = false;

    var twoLeft = document.getElementById("buttonTwoLeftID");
    twoLeft.value = 10;
    document.getElementById("buttonTwoLeftID").disabled = false;

    var threeLeft = document.getElementById("buttonThreeLeftID");
    threeLeft.value = 5;
    document.getElementById("buttonThreeLeftID").disabled = false;

    var fourLeft = document.getElementById("buttonFourLeftID");
    fourLeft.value = 5;
    document.getElementById("buttonFourLeftID").disabled = false;

    setOnePPCountRight(oneRight.value);
    setTwoPPCountRight(twoRight.value);
    setThreePPCountRight(threeRight.value);
    setFourPPCountRight(fourRight.value);
    setOnePPCountLeft(oneLeft.value);
    setTwoPPCountLeft(twoLeft.value);
    setThreePPCountLeft(threeLeft.value);
    setFourPPCountLeft(fourLeft.value);
    setPokemonHealthLeft(document.getElementById("healthbarLeft").value);
    setPokemonHealthRight(document.getElementById("healthbarRight").value);
  }

  return (
    <div>
      <form onSubmit= {handleSubmitForm} >
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
                animationId={"attackAnimationRight"}
                animationClass={"rightMoveOneAnimation"}
                audioId={"audioLeftMoveOne"}
                buttonId={"buttonOneRightID"}
                ppCount={setOnePPCountRight}
                hpId={"healthbarLeft"}
                attackValue={7}
                ground={ground1}
                groundPosition={"groundPosition2"}
                attackAudio1={"audioLeftMoveOne"}
                attackAudioLink1={woosh}
                attackAudio2={"audioLeftMoveTwo"}
                attackAudioLink2={bite}
                attackAudio3={"audioLeftMoveThree"}
                attackAudioLink3={thunder}
                attackAudio4={"audioLeftMoveFour"}
                attackAudioLink4={heal}
                healthID={"healthbarLeft"}
                attackID={"attackAnimationLeft"}
                imagePosition={"pokemonBack"}
                image={data.sprites["back_shiny"]}
                health={pokemonHealthLeft}
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
                onePP={onePPCountLeft}
                attackOneID={"buttonOneLeftID"}
                twoPP={twoPPCountLeft}
                attackTwoID={"buttonTwoLeftID"}
                threePP={threePPCountLeft}
                attackThreeID={"buttonThreeLeftID"}
                fourPP={fourPPCountLeft}
                attackFourID={"buttonFourLeftID"}
                attackTwoValue={"10"}
                attackThreeValue={"5"}
                key={index}
              />)}

            {pokemonDataRight.map((data, index) =>
              <BattleCard
                animationId={"attackAnimationLeft"}
                animationClass={"rightMoveOneAnimation"}
                audioId={"audioLeftMoveOne"}
                buttonId={"buttonOneLeftID"}
                hpId={"healthbarRight"}
                attackValue={7}
                groundPosition={"groundPosition"}
                ground={ground}
                attackAudio1={"audioRightMoveOne"}
                attackAudioLink1={woosh}
                attackAudio2={"audioRightMoveTwo"}
                attackAudioLink2={slash}
                attackAudio3={"audioRightMoveThree"}
                attackAudioLink3={tornado}
                attackAudio4={"audioRightMoveFour"}
                attackAudioLink4={holy}
                healthID={"healthbarRight"}
                attackID={"attackAnimationRight"}
                imagePosition={"pokemonFront"}
                image={data.sprites["front_shiny"]}
                health={pokemonHealthRight}
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
                onePP={onePPCountRight}
                attackOneID={"buttonOneRightID"}
                twoPP={twoPPCountRight}
                attackTwoID={"buttonTwoRightID"}
                threePP={threePPCountRight}
                attackThreeID={"buttonThreeRightID"}
                fourPP={fourPPCountRight}
                attackFourID={"buttonFourRightID"}
                attackTwoValue={"5"}
                attackThreeValue={"10"}
                key={index}
              />)}
          </div>
          <button onClick={resetHealth} className="reset">Reset HP</button>
    </div>
  )
}

export default Input;

  // const [text, setText] = useState('')
  // const [suggestions, setSuggestions] = useState([])
  // const [loadList, setLoadList] = useState([])

  // const getListPokemon = async () => {
  //   const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
  //   const data = await res.json()
  //   setLoadList(newArray => [...newArray, data])
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getListPokemon()
  // }, [])

  // const onChangeHandler = (text) => {
  //   let matches = []
  //   if (text.length>0){
  //     matches = loadList.filter(user=>{
  //       const regex = new RegExp(`${text}`, "gi");
  //       return user.results.name.match(regex)
  //     })
  //   }
  //   console.log(matches)
  //   setSuggestions(matches)
  //   setText(text)
  // }