import { NEXT_PAGE, PREV_PAGE } from "../actions/types";

export default (state = 1, action: Record<string, any>) => {
  switch (action.type) {
    case NEXT_PAGE: {
      return state + 1;
    }
    case PREV_PAGE: {
      return state - 1;
    }
    default:
      return state;
  }
};
