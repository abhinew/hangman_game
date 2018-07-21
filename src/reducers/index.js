import { NEW_GAME } from "../actions/game";



const reducer = (state = [], action = {}) => {
  console.log(state);
    switch (action.type) {
      case NEW_GAME:
          return state;
    default:
      return state
    }
}
  
export default reducer