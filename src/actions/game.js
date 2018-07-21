export const NEW_GAME = "NEW_GAME";

export function newGame() {
    return {
        type: 'NEW_GAME'
    }

}
export function makeGuess() {
    return {
        type: 'MAKE_GUESS'
    }

}
