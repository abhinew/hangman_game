import { NEW_GAME, MAKE_GUESS } from "../actions/game";
import {showGuess, randomWord} from '../lib/game';

const reducer = (state = [], action = {}) => {
  
  let newState = {...state};
  switch (action.type) {
    case MAKE_GUESS:
      let selectedWord = newState.currentWord;
      let guessedLetter = action.payload.guessedLetter;     
      newState.guesses.push(guessedLetter);
      newState.wordWithMatchedGuesses = showGuess(selectedWord,newState.guesses);
      newState.guessedLetter = action.payload.guessedLetter;
      console.log(newState.wordWithMatchedGuesses);
      return newState;
    case NEW_GAME:
      newState.currentWord = randomWord();
      newState.guesses = [];
      return newState;
    default:
      return state
  }

}
  
export default reducer


