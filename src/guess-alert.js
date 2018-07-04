import React from 'react';

import "./guess-alert.css"

export default function Alert(props){
    let feedback="Pick a number between 1 and 100 and I'll tell you if you're hot or cold"
    const difference = Math.abs(props.guess-props.secretNum);

    if (props.guess !== 0){
        if (difference === 0) {
            feedback="Great Job! You win!"
        } else if (difference > 0 && difference <= 2) {
            feedback="Burning"
        } else if (difference > 3 && difference <= 8) {
            feedback="Hot"
        } else if (difference > 8 && difference <= 18 ) {
            feedback="Very Warm"
        } else if (difference > 18 && difference <= 38) {
            feedback="Cool"
        } else if (difference > 38 && difference <= 68) {
            feedback="Cold"
        } else if (difference > 68 && difference <= 100) {
            feedback="Freezing"
        }
    }

    return (
        <div className="center" id="feedback-block">
            <p>{feedback}</p>
        </div>
    )
}