import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { makeGuess } from '../actions/game';


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
        console.log(this.props.matchedWord);
        
    }
    show = () => {
        return (this.props.matchedWord);
    }
    
    render () {
        
        return (
            <div>
                <input type="text" name="selectedWord" placeholder={this.displayRandomWord()} value={this.show()}/>
                Enter Letter to guess: <input name="letter" type="text" onChange={ this.getLetter.bind(this) }/>
                <button onClick={this.onClick}>Make a guess</button>
                <button> New Game</button>
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
const mapDispatchToProps = (dispatch) => {
  return {
    makeGuess: (letter) => dispatch(makeGuess(letter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)

