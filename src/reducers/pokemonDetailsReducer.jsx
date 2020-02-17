export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_POKEMON_DETAILS": {
      return action.payload;
    }
    default:
      return state;
  }
};
