import React from "react";
import "./App.css";
import { Component } from "react";
import PokemonList from "./components/pokemon/list/List";
import PokemonDetails from "./components/pokemon/details/Details";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <PokemonList></PokemonList>
          </div>
          <div className="col-lg-4">
            <PokemonDetails></PokemonDetails>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
