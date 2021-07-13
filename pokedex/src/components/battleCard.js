import React from 'react'
import './battleCard.css'

const BattleCard = ({oneRight, attackValue, ppCount, hpId, animationId, animationClass, audioId, time, buttonId, attackThreeValue, attackTwoValue, attackOneID, attackTwoID, attackThreeID, attackFourID, onePP, twoPP, threePP, fourPP, groundID, groundPosition, ground, attackID, attackAudio1, attackAudio2, attackAudio3, attackAudio4, attackAudioLink1, attackAudioLink2, attackAudioLink3, attackAudioLink4, healthID, imagePosition, image, health, moveOne, moveTwo, moveThreeCalculation, moveThree, moveFourCalculation, moveFour, container, picture, id, name, type, attack, defense, spatk, spdef, hp, speed }) => {

    const HealthZeroCheck = () => {
        var v1 = document.getElementById(('healthbarRight'));
        var v2 = document.getElementById('healthbarLeft');
        if (v1.value === 0) {
          setTimeout(() => {
            alert("You win! The opposing pokemon has fainted!");
            // resetHealth();
          }, 50)
        }
        if (v2.value === 0) {
          setTimeout(() => {
            alert("You win! The opposing pokemon has fainted!");
            // resetHealth();
          }, 50)
        }
      }
    

    const calcMove = async (hpId, attackValue, animationClass, oneRight, ppCount, buttonId) => {
        var v1 = document.getElementById(hpId);
        v1.value -= (Math.random() * (attackValue) + attackValue) << 0;
        // if(side !== 'right') {
        //     setPokemonHealth(v1.value);
        // }
    
        if (v1.value > 0) {
          var element = document.getElementById(animationId);
          element.classList.add(animationClass);
          setTimeout(() => {
            element.classList.remove(animationClass);
          }, time)
        }
    
        if (v1.value > 0) {
          var audio = document.getElementById(audioId)
          audio.play();
        }
    
        HealthZeroCheck();
    
        var oneRight = document.getElementById(buttonId)
    
        if (oneRight.value > 0) {
          oneRight.value -= 1;
          ppCount(oneRight.value)
        }
        if (oneRight.value == 0) {
          document.getElementById(buttonId).disabled = true;
        }
      }

    return (
        <div className="divPokemon">
            <div className="pokemonPosition">
                <img id={attackID} className={imagePosition} src={image} alt={name} />
                <img id={groundID} className={groundPosition} src={ground} alt="Couldn't load terrain" />
            </div>
            <div className="divTable">

                <div className="divTableBody">
                    {health}/100 &nbsp;&nbsp;
                    <progress id={healthID} value="100" max="100"></progress>
                    <div className="divTableRow">
                        <button id={attackOneID} onClick={calcMove(hpId, attackValue, oneRight, animationClass, animationId, ppCount, buttonId)} className="divTableCell1" value="25" >{moveOne}&nbsp;&nbsp;{onePP}/25</button>
                        <audio id={attackAudio1} src={attackAudioLink1}></audio>
                        <button id={attackTwoID} onClick={calcMove(hpId)} className="divTableCell2" value={attackTwoValue}>{moveTwo}&nbsp;&nbsp;{twoPP}/{attackTwoValue}</button>
                        <audio id={attackAudio2} src={attackAudioLink2}></audio>
                    </div>

                    <div className="divTableRow">
                        <button id={attackThreeID} onClick={moveThreeCalculation} className="divTableCell1" value={attackThreeValue}>{moveThree}&nbsp;&nbsp;{threePP}/{attackThreeValue}</button>
                        <audio id={attackAudio3} src={attackAudioLink3}></audio>
                        <button id={attackFourID} onClick={moveFourCalculation} className="divTableCell2" value="5">{moveFour}&nbsp;&nbsp;{fourPP}/5</button>
                        <audio id={attackAudio4} src={attackAudioLink4}></audio>
                    </div>
                </div>
            </div>
            <div className={container} >
                <div className="triangle"></div>
                <img src={picture} alt="Couldn't load pokemon" />
                <div>
                    <small>#0{id}</small>
                    <h5>{name}</h5>
                    <small>Type: {type}</small>
                    <table className="tableNew">
                        <tbody>
                            <tr>
                                <td>HP: <br></br>{hp}</td>
                                <td>Attack: {attack}</td>
                                <td>Defense: {defense}</td>
                            </tr>
                            <tr>
                                <td>Sp. Att: {spatk}</td>
                                <td>Sp. Def: {spdef}</td>
                                <td>Speed: <br></br>{speed}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BattleCard
