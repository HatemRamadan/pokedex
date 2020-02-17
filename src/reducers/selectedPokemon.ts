import { SELECT_POKEMON } from "../actions/types";

export default (state = null, action: Record<string, any>) => {
  switch (action.type) {
    case SELECT_POKEMON: {
      return action.payload;
    }
    default:
      return state;
  }
};
