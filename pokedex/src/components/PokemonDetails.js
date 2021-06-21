import React from 'react'
import './card.css';

const PokemonDetails = ({ id, image, name, type }) => {
    const style = type + "detailcontainer";
    return (
        <div className={style}>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <small>#0{id}</small>
                <h5>{name}</h5>
                <small>Type: {type}</small>
            </div>
        </div>
    )
}

export default PokemonDetails