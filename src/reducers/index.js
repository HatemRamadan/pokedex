import { combineReducers } from "redux";
import pokemonDetailsReducer from "./pokemonDetailsReducer";
import pokemonsReducer from "./pokemonsReducer";
import pageReducer from "./pageReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  pokemons: pokemonsReducer,
  pokemonDetails: pokemonDetailsReducer,
  page: pageReducer,
  loading: loadingReducer
});
