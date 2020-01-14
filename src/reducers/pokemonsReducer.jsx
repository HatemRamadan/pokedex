export default (state = [], action) => {
    switch (action.type) {
      case "FETCH_PAGE": {
        return {pokemons: action.payload };
      }
      default:
        return state;
    }
  };