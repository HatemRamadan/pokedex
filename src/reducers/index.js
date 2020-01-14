import { combineReducers } from "redux";
import pokemonDetailsReducer from "./pokemonDetailsReducer";
import pokemonsReducer from "./pokemonsReducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer
});
