import React from 'react'
import './battle.css';


const battleCard = ({ health, picture, move1, move2, move3, move4 }) => {
    const style = "cardBattle";
    return (
        <div className={style}>
            <img src={picture} alt={picture} />
            <div className="card-wrapper">
                <progress>{health}/100 &nbsp;&nbsp;</progress>
                <div className = "divTableRow">
                    {/* <button onClick = {calcMoveOneRight}></button> */}
                </div>
            </div>
        </div>
    ) 
}

export default battleCard