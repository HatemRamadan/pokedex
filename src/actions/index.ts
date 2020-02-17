import pokeApi from "../api/pokeApi";
import * as actionTypes from "./types";

export const getPokemons = (page: number, limit: number) => async (
  dispatch: Function
) => {
  const response = await pokeApi.get(
    "/?limit=" + limit + "&offset=" + (page - 1) * 20
  );
  var pokemons: Record<string, string>[] = [];
  response.data.results.forEach((pokemon: Record<string, string>) => {
    var number = pokemon.url
      .replace("https://pokeapi.co/api/v2/pokemon/", "")
      .replace("/", "");
    pokemon["number"] = number;
    pokemons.push(pokemon);
  });
  dispatch({
    type: actionTypes.GET_NUMBER_OF_POKEMONS,
    payload: response.data.count
  });
  dispatch({ type: actionTypes.FETCH_PAGE, payload: pokemons });
  dispatch(loadingOff());
};

export const getPokemonDetails = (pokemonNumber: number) => async (
  dispatch: Function
) => {
  if (pokemonNumber) {
    const response = await pokeApi.get("/" + pokemonNumber);

    var details: Record<string, string | Record<string, any>[]> = {};
    var types: Record<string, any>[] = [];
    var stats: Record<string, any>[] = [];
    response.data.types.forEach((type: Record<string, any>) => {
      types.push(type.type.name);
    });
    response.data.stats.forEach((stat: Record<string, any>) => {
      stats.push({ value: stat.base_stat, name: stat.stat.name });
    });
    const name = response.data.forms[0].name;
    details["name"] = name.substring(0, 1).toUpperCase() + name.substring(1);
    details["image"] = response.data.sprites.front_default;
    details["types"] = types;
    details["stats"] = stats;
    dispatch({ type: actionTypes.FETCH_POKEMON_DETAILS, payload: details });
  }
};

export const selectPokemon = (pokemonNumber: number) => {
  return { type: actionTypes.SELECT_POKEMON, payload: pokemonNumber };
};

export const nextPage = () => (dispatch: Function) => {
  dispatch(loadingOn());
  dispatch({ type: actionTypes.NEXT_PAGE });
};

export const prevPage = () => (dispatch: Function) => {
  dispatch(loadingOn());
  dispatch({ type: actionTypes.PREV_PAGE });
};

export const loadingOn = () => {
  return { type: actionTypes.LOADING_ON };
};

export const loadingOff = () => {
  return { type: actionTypes.LOADING_OFF };
};
