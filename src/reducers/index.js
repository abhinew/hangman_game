import { NEW_GAME, MAKE_GUESS } from "../actions/game";
import {showGuess, randomWord, wrongGuessCount, wrongGuessLimit, isWinner } from '../lib/game';


const reducer = (state = [], action = {}) => {
  
  let newState = {...state};
  switch (action.type) {
    case MAKE_GUESS: {
      let guessedLetter = action.payload.guessedLetter;     
      newState.guesses.push(guessedLetter);
      newState.wordWithMatchedGuesses = showGuess(newState.currentWord,newState.guesses);
      newState.wrongGuessCount = wrongGuessCount(newState.currentWord,newState.guesses);
      if (wrongGuessLimit(newState.currentWord, newState.guesses)) {
        alert("Game over");
      }
      if (isWinner(newState.currentWord, newState.guesses)) {
        alert("Congrats! You won this game!!!")
      }
      return newState;
      break;
    }  
    case NEW_GAME: {
      newState.currentWord = randomWord();
      const displayRandomWord = () => {
        let arr = []       
        let numOfCharaters = newState.currentWord.length;
        for (let i=0; i<numOfCharaters; i++) {
          arr.push("_");
        }
        return arr.map(element => "_"+" ") 
      }
      newState.wordWithMatchedGuesses = displayRandomWord();
      newState.guesses = [];
      return newState;
      break;
    } 
    default:
      return state
  }

}
  
export default reducer


