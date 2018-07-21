export const NEW_GAME = "NEW_GAME";
export const MAKE_GUESS = "MAKE_GUESS"


export function makeGuess(letterToGuess) {
    
    return {
        type: 'MAKE_GUESS',
        payload: {
            guessedLetter: letterToGuess
        }
        
    }

}


export function newGame() {
    return {
        type: 'NEW_GAME'
        
    }

}

