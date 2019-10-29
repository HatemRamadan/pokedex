import React from "react";
import ReactDOM from "react-dom";
import PokemonService from "./PokemonService";

describe("Pokemon Service Tests", () => {
  it("Get Pokemons Tests", () => {
    return PokemonService.getPokemons(1, 20).then(data => {
        expect(data).toHaveLength(21);
    })
  });

  it("Get Pokemon Details", () => {
    return PokemonService.getPokemonDetails(1).then(data => {
        expect(data.name).toBeDefined();
    })
  });
});