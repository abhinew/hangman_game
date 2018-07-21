import { NEW_GAME, MAKE_GUESS } from "../actions/game";
import {showGuess} from '../lib/game';

const reducer = (state = [], action = {}) => {
  

    switch (action.type) {
      case MAKE_GUESS:
        let selectedWord = state.currentWord;
        let guessedLetter = action.payload.guessedLetter;
        
        state.guesses.push(guessedLetter);
        //console.log(showGuess(selectedWord,state.guesses));
        
        let wordWithMatchedGuesses = showGuess(selectedWord,state.guesses);
          return {
            ...state,
            guessedLetter: action.payload.guessedLetter,
            wordWithMatchedGuesses 
            
          }
      case NEW_GAME:
        return state;

    default:
      return state
    }
}
  
export default reducer