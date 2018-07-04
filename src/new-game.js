import React from "react";

import "./new-game.css"

export default function NewGame(props){
    return(
        <div className="center" id="new-game-div">
            <button id="new-game-btn" onClick={e=>window.location.reload()}>New Game</button>
        </div>
    )
}