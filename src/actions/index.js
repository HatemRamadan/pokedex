import pokeApi from "../api/pokeApi";

export const getPokemons = (page, limit) => async dispatch => {
  const response = await pokeApi.get(
    "/?limit=" + limit + "&offset=" + (page - 1) * 20
  );
  var pokemons = [];
  response.data.results.forEach(pokemon => {
    var number = pokemon.url
      .replace("https://pokeapi.co/api/v2/pokemon/", "")
      .replace("/", "");
    pokemon["number"] = number;
    pokemons.push(pokemon);
  });
  // pokemons.push({ count: response.data.count });
  dispatch({ type: "FETCH_PAGE", payload: pokemons });
  dispatch(loadingOff());
};

export const getPokemonDetails = pokemonNumber => async dispatch => {
  if (pokemonNumber) {
    const response = await pokeApi.get("/" + pokemonNumber);

    var details = {};
    var types = [];
    var stats = [];
    response.data.types.forEach(type => {
      types.push(type.type.name);
    });
    response.data.stats.forEach(stat => {
      stats.push({ value: stat.base_stat, name: stat.stat.name });
    });
    const name = response.data.forms[0].name;
    details["name"] = name.substring(0, 1).toUpperCase() + name.substring(1);
    details["image"] = response.data.sprites.front_default;
    details["types"] = types;
    details["stats"] = stats;
    dispatch({ type: "FETCH_POKEMON_DETAILS", payload: details });
  }
};

export const selectPokemon = pokemonNumber => {
  return { type: "SELECT_POKEMON", payload: pokemonNumber };
};

export const nextPage = () => dispatch => {
  dispatch(loadingOn());
  dispatch({ type: "NEXT_PAGE" });
};

export const prevPage = () => dispatch => {
  dispatch(loadingOn());
  dispatch({ type: "PREV_PAGE" });
};

export const loadingOn = () => {
  return { type: "LOADING_ON" };
};

export const loadingOff = () => {
  return { type: "LOADING_OFF" };
};
