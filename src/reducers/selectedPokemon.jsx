export default (state = null, action) => {
  switch (action.type) {
    case "SELECT_POKEMON": {
      return action.payload;
    }
    default:
      return state;
  }
};
