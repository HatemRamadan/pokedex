import { FETCH_POKEMON_DETAILS } from "../actions/types";

export default (state = {}, action: Record<string, any>) => {
  switch (action.type) {
    case FETCH_POKEMON_DETAILS: {
      return action.payload;
    }
    default:
      return state;
  }
};
