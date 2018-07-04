import React from 'react';
import "./guess-tracking.css"

export default function Tracking(props){
    const guesses = props.guessArray.map((guess, index) =>
        <div key={index} className="inline">
            {guess}
        </div>
    );

    return (
        <div className="center" id="tracking-div">
            <p>You've already tried:</p>
            <div>{guesses}</div>
        </div>
    )
}