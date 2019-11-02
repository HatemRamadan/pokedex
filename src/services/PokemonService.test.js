import PokemonService from "./PokemonService";

describe("Pokemon Service Tests", () => {
  it("Get Pokemons Tests", () => {
    return PokemonService.getPokemons(1, 20).then(data => {
      expect(data).toHaveLength(21);
      expect(data[0].name).toBeDefined();
      expect(data[0].number).toBeDefined();
    });
  });

  it("Get Pokemon Details", () => {
    return PokemonService.getPokemonDetails(1).then(data => {
      expect(data.name).toBeDefined();
      expect(data.image).toBeDefined();
      expect(data.types).toBeDefined();
      expect(data.stats).toBeDefined();
    });
  });
});
