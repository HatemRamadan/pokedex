import pokeApi from "../api/pokeApi";

const ls = require("localstorage-ttl");
const PokemonService = {
  //calls to API

  getPokemons: function(page, limit) {
    const cashed = ls.get("Cashed Pokemon Page: " + page);
    return new Promise(function(resolve, reject) {
      if (cashed !== null) {
        resolve(cashed);
      } else {
        console.log("API call page");
        pokeApi
          .get("/?limit=" + limit + "&offset=" + (page - 1) * 20)
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
            ls.set("Cashed Pokemon Page: " + page, pokemons);
            resolve(pokemons);
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  },
  getPokemonDetails: function(number) {
    const cashed = ls.get("Cashed Pokemon Details Number: " + number);
    return new Promise(function(resolve, reject) {
      if (cashed !== null) {
        resolve(cashed);
      } else {
        console.log("API call details");
        pokeApi
          .get("/" + number)
          .then(res => {
            var details = {};
            var types = [];
            var stats = [];
            res.data.types.forEach(type => {
              types.push(type.type.name);
            });
            res.data.stats.forEach(stat => {
              stats.push({ value: stat.base_stat, name: stat.stat.name });
            });
            const name = res.data.forms[0].name;
            details["name"] =
              name.substring(0, 1).toUpperCase() + name.substring(1);
            details["image"] = res.data.sprites.front_default;
            details["types"] = types;
            details["stats"] = stats;
            ls.set("Cashed Pokemon Details Number: " + number, details);
            resolve(details);
          })
          .catch(error => {
            reject(error);
          });
      }
    });
  }
};
export default PokemonService;
