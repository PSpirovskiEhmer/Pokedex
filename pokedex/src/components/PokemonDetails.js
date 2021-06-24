import React from 'react'
import './card.css';

const PokemonDetails = ({ id, image, name, type, hp, attack, defense, spatk, spdef, speed, total}) => {
    const conteffect = type + " detailcontainer";
    return (
        <div className={conteffect}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <small>#0{id}</small>
                <h5>{name}</h5>
                <small>Type: {type}</small>
                <table className="table">
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
                </table>
            </div>
        </div>
    )
}

export default PokemonDetails