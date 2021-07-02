import React from 'react'
import './battleCard.css'

const BattleCard = ({ groundID, groundPosition, ground, attackID, attackAudio1, attackAudio2, attackAudio3, attackAudio4, attackAudioLink1, attackAudioLink2, attackAudioLink3, attackAudioLink4, healthID, imagePosition, image, health, healthDepletedMethod, checkmove1, move1, checkmove2, move2, checkmove3, move3, checkmove4, move4, cont, picture, id, name, type, attack, defense, spatk, spdef, hp, speed }) => {
    return (
        <div className="divPokemon">
            <div className="pokemonPos">
                <img id={attackID} className={imagePosition} src={image} alt={name} />
                <img id={groundID} className={groundPosition} src={ground} alt="Couldn't load terrain" />
            </div>
            <div className="divTable">

                <div className="divTableBody">
                    {health}/100 &nbsp;&nbsp;
                    <progress onChange={healthDepletedMethod} id={healthID} value="100" max="100"></progress>
                    <div className="divTableRow">
                        <button onClick={checkmove1} className="divTableCell1">{move1}</button>
                        <audio id={attackAudio1} src={attackAudioLink1}></audio>
                        <button onClick={checkmove2} className="divTableCell2">{move2}</button>
                        <audio id={attackAudio2} src={attackAudioLink2}></audio>
                    </div>

                    <div className="divTableRow">
                        <button onClick={checkmove3} className="divTableCell1">{move3}</button>
                        <audio id={attackAudio3} src={attackAudioLink3}></audio>
                        <button onClick={checkmove4} className="divTableCell2">{move4}</button>
                        <audio id={attackAudio4} src={attackAudioLink4}></audio>
                    </div>
                </div>
            </div>
            <div className={cont} >
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
