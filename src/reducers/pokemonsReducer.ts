import { FETCH_PAGE } from "../actions/types";

export default (state = [], action: Record<string, any>) => {
  switch (action.type) {
    case FETCH_PAGE: {
      return action.payload;
    }
    default:
      return state;
  }
};
