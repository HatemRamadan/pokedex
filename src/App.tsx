import React from "react";
import "./App.css";
import PokemonList from "./components/pokemon/list/List";
import PokemonDetails from "./components/pokemon/details/Details";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const cardStyle = { width: "18rem", backgroundColor: "#e6cdac" };

const App = () => {
  const clearLocalStorage = (event: any) => {
    localStorage.clear();
  };

  return (
    <div className="App container-fluid">
      <Router>
        <div className="row ml-2">
          <div className="col-md-12" onDoubleClick={clearLocalStorage}>
            <h1 className="text-center title slide-fwd-center">Pokédex</h1>
          </div>
        </div>
        <div className="row ml-2">
          <div
            id="focusable"
            className="col-lg-8 col-sm-6 col-md-6 card mt-3"
            style={cardStyle}
          >
            <PokemonList></PokemonList>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6 mt-3">
            <Route
              path="/pokedex/:number"
              render={number => <PokemonDetails number={number} />}
            />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
