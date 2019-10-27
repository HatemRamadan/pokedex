import React from "react";
import "./App.css";
import { Component } from "react";
import PokemonList from "./components/pokemon/list/List";
import PokemonDetails from "./components/pokemon/details/Details";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
          <div className="row">
            <div
              className="col-lg-8 col-sm-8"
              style={{ borderRight: "2px dashed #333" }}
              onKeyPress={this.clearLocalStorage}
            >
              <PokemonList></PokemonList>
            </div>

            <div className="col-lg-4 col-sm-4">
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
