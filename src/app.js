import React from 'react';

import "./app.css"
import Alert from "./guess-alert";
import Count from "./guess-count";
import Form from "./guess-form";
import NewGame from "./new-game";
import Tracking from "./guess-tracking";

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            guess:0,
            guessArray:[],
            secretNum: Math.floor(Math.random() * 101)
        }
    }

    newGuess(guess){
        this.setState({
            guess
        })
    }

    newCount(){
        this.setState((prevState)=>{
            return {count: prevState.count + 1}
        })
    }

    addGuess(guess){
        this.setState({
            guessArray:[...this.state.guessArray, guess]
        })
    }

    render(){
        return(
        <div>
            <NewGame />
            <h1>Guess the Number!</h1>
            <Alert secretNum={this.state.secretNum} guess={this.state.guess}/>
            <Form 
                onSubmit={e=>{
                    e.preventDefault();
                    const guess=(document.getElementById("guess").value);
                    this.newGuess(guess);
                    this.newCount();
                    this.addGuess(guess);
                }}
            />
            <Count count={this.state.count}/>
            <Tracking guessArray={this.state.guessArray}/>
        </div>)
    }



}