import React from "react";
import ReactDOM from "react-dom";
import PokemonService from "./PokemonService";

describe("Get Pokemons Service Test", () => {
  it("My Test Case", () => {
    return PokemonService.getPokemons(1, 20).then(data => {
        console.log(data.length)
        expect(data).toHaveLength(21);
    })
  });
  
});