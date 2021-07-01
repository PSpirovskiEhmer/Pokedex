import React from 'react'
import './battleCard.css'

const BattleCard = ({ attackid, audio1, audio2, audio3, audio4, audiolink1, audiolink2, audiolink3, audiolink4, healthid, imagepos, image, health, zerocheck, checkmove1, move1, checkmove2, move2, checkmove3, move3, checkmove4, move4, cont, picture, id, name, type, attack, defense, spatk, spdef, hp, speed }) => {
    return (
        <div className="divPokemon">
            <div className="pokemonPos">
                <img id={attackid} className={imagepos} src={image} alt="Couldn't load pokemon" />
            </div>
            <div className="divTable">

                <div className="divTableBody">
                    {health}/100 &nbsp;&nbsp;
                    <progress onChange={zerocheck} id={healthid} value="100" max="100"></progress>
                    <div className="divTableRow">
                        <button onClick={checkmove1} className="divTableCell1">{move1}</button>
                        <audio id={audio1} src={audiolink1}></audio>
                        <button onClick={checkmove2} className="divTableCell2">{move2}</button>
                        <audio id={audio2} src={audiolink2}></audio>
                    </div>

                    <div className="divTableRow">
                        <button onClick={checkmove3} className="divTableCell1">{move3}</button>
                        <audio id={audio3} src={audiolink3}></audio>
                        <button onClick={checkmove4} className="divTableCell2">{move4}</button>
                        <audio id={audio4} src={audiolink4}></audio>
                    </div>
                </div>
            </div>
            <div className={cont}>
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
