import React from "react";
import "./App.css";
import { Component } from "react";
import PokemonList from "./components/pokemon/list/List";
import PokemonDetails from "./components/pokemon/details/Details";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const cardStyle = { width: "22rem", backgroundColor: "#ccdbe8" };

class App extends Component {
  state = {};

  clearLocalStorage = event => {
    if (event.key === "c") {
      localStorage.clear();
    }
  };
  render() {
    return (
      <div className="App container-fluid">
        <Router>
          <div className="row ml-2">
            <div className="col-md-12">
              <h1 className="text-center title">Pokédex</h1>
            </div>
          </div>
          <div className="row ml-2">
            <div
              className="col-lg-8 col-sm-8 card mt-3"
              style={cardStyle}
              onKeyPress={this.clearLocalStorage}
            >
              <PokemonList></PokemonList>
            </div>

            <div className="col-lg-4 col-sm-4 mt-3">
              <Route
                path="/:number"
                render={number => <PokemonDetails number={number} />}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
