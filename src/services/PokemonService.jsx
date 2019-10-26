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
            var number = pokemon.url
              .replace("https://pokeapi.co/api/v2/pokemon/", "")
              .replace("/", "");
            pokemon["number"] = number;
            pokemons.push(pokemon);
          });
          pokemons.push({ count: res.data.count });
          resolve(pokemons);
        })
        .catch(error => {
          resolve(error);
        });
    });
  },
  getPokemonDetails: function(number) {
    return new Promise(function(resolve, reject) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/"+number)
        .then(res => {
          var details=[];
          var types=[];
          var stats=[];
          res.data.types.forEach(type => {
            types.push(type.type.name);
          });
          res.data.stats.forEach(stat => {
            stats.push({value:stat.base_stat, name:stat.stat.name});            
          });
          details["image"]=res.data.sprites.front_default;
          details["types"]=types;
          details["stats"]=stats;
          resolve(details);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
export default PokemonService;
