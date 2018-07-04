import React from "react";

export default function Form(props){
    return (
    <div>
        <form onSubmit={props.onSubmit}>
        <fieldset>
            <input type="number" id="guess" min="1" max="100"></input>
            <input type="submit"></input>
        </fieldset>
        </form>
    </div>
    )
}