export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_POKEMON_DETAILS": {
      return {details: action.payload };
    }
    default:
      return state;
  }
};