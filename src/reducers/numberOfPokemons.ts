import { GET_NUMBER_OF_POKEMONS } from "../actions/types";

export default (state = 0, action: Record<string, any>) => {
  switch (action.type) {
    case GET_NUMBER_OF_POKEMONS: {
      return action.payload;
    }
    default:
      return state;
  }
};
