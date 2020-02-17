import { LOADING_OFF, LOADING_ON } from "../actions/types";

export default (state = false, action: Record<string, any>) => {
  switch (action.type) {
    case LOADING_ON: {
      return true;
    }
    case LOADING_OFF: {
      return false;
    }
    default:
      return state;
  }
};
