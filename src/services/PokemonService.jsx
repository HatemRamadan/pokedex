import axios from "axios";
const PokemonService = {
  //calls to API

  getPokemons: function(page, limit) {
    return new Promise(function(resolve, reject) {

      const params = {
        offset: (page - 1) * 20,
        limit: limit
      };
      axios
        .get("https://pokeapi.co/api/v2/pokemon/", { params })
        .then(res => {
          var pokemons = [];
          res.data.results.forEach(pokemon => {
            var number = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","");
            pokemon['number'] = number;
            pokemons.push(pokemon);
            
          });
          pokemons.push({count:res.data.count});
          resolve(pokemons);
        })
        .catch(error => {
          resolve(error);
        });
    });
  }
};
export default PokemonService;
