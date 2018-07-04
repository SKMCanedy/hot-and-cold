import React from "react";

export default function NewGame(props){
    return(
        <div>
            <button onClick={e=>window.location.reload()}>New Game</button>
        </div>
    )
}