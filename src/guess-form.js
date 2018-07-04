import React from "react";

import "./guess-form.css"

export default function Form(props){
    return (
    <div className="center" id="form-div">
        <form onSubmit={props.onSubmit}>
        <fieldset>
            <input type="number" id="guess" min="1" max="100" required></input>
            <div><button type="submit" className="btn">Guess</button></div>
        </fieldset>
        </form>
    </div>
    )
}