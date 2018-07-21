import { createStore } from 'redux'
import reducer from './reducers'
import { wordList } from './lib/game';
import { randomWord } from './lib/game';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
    currentWord : randomWord(),
    numOfGuesses: null,
    guessedLetter: null
}

const store = createStore(reducer, initialState, enhancer)

export default store