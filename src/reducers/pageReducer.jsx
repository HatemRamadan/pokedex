export default (state = 1, action) => {
  switch (action.type) {
    case "NEXT_PAGE": {
      return state + 1;
    }
    case "PREV_PAGE": {
      return state - 1;
    }
    default:
      return state;
  }
};
