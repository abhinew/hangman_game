import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { makeGuess, newGame } from '../actions/game';


class GamePage extends PureComponent {

    state = {

    }

    displayRandomWord() {
        let arr = []       
        let numOfCharaters = this.props.selectedWord.length;
        for (let i=0; i<numOfCharaters; i++) {
            arr.push("_");
        }
        return arr.map(element => "_"+" ") 
    }

    getLetter(event) {
        this.setState({
            guessedLetter: event.target.value
        })
    }

    onClick = () => {
        
        this.props.makeGuess(this.state.guessedLetter);
        
        this.setState({
            guessedLetter: ""
        })
    }
    
    
    render () {
        return (
            <div>
                <input type="text" name="selectedWord" placeholder={this.displayRandomWord()} value={this.props.matchedWord}/>
                Enter Letter to guess: <input name="letter" type="text" onChange={ this.getLetter.bind(this)} value={this.state.guessedLetter}/>
                <button onClick={this.onClick}>Make a guess</button>
                <button onClick={this.props.newGame}> New Game</button>
            </div>
        )
    }
}

const mapStateToProps =  (state) => {
    return {    
      selectedWord: state.currentWord,
      matchedWord: state.wordWithMatchedGuesses
    }
}


export default connect(mapStateToProps, { makeGuess, newGame })(GamePage)

