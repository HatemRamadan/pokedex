import React from "react";
import { Component } from "react";
import PokemonItem from "../item/Item";
import PokemonService from "../../../services/PokemonService";

export default class PokemonList extends Component {
  state = { pokemons: [], currentPage: 1, totalNumber: 0 };

  componentWillMount() {
    this.getPokemons();
  }
  getPokemons() {
    PokemonService.getPokemons(this.state.currentPage, 20)
      .then(data => {
        this.setState({ pokemons: data, totalNumber: data.pop().count });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handlePreviousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState(
        currentState => ({ currentPage: currentState.currentPage - 1 }),
        () => {
          this.getPokemons();
        }
      );
    }
  };

  handleNextPage = () => {
    if (this.state.currentPage < this.state.totalNumber / 20) {
      this.setState(
        currentState => ({ currentPage: currentState.currentPage + 1 }),
        () => {
          this.getPokemons();
        }
      );
    }
  };
  render() {
    return (
      <div>
        {/* <h3 className="text-center text-success">Pokemons</h3> */}
        <div className="container">
          <div className="row">
            {this.state.pokemons.map(pokemon => {
              return (
                <div key={pokemon.number} className="col-md-3 mt-3">
                  <PokemonItem
                    name={pokemon.name}
                    number={pokemon.number}
                  ></PokemonItem>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-4 mb-3">
          <button
            className="btn btn-secondary mr-2"
            onClick={this.handlePreviousPage}
          >
            Previous
          </button>
          <button className="btn btn-secondary" onClick={this.handleNextPage}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
