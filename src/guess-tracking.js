import React from 'react';

export default function Tracking(props){
    const guesses = props.guessArray.map((guess, index) =>
        <div key={index}>
            {guess}
        </div>
    );

    return guesses
}