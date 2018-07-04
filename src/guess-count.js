import React from 'react';

import "./guess-count.css";

export default function Count(props){
    return(
    <div className="center" id="count-block">
        <p>Attempt # {props.count} </p>
    </div>
    )
}