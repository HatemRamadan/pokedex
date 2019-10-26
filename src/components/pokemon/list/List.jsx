import React from "react";
import { Component } from "react";
import PokemonItem from "../item/Item";
import PokemonService from "../../../services/PokemonService";

export default class PokemonList extends Component {
  state = { pokemons: [], currentPage: 1, totalNumber: 0 };

  componentWillMount() {
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
          this.componentWillMount();
        }
      );
    }
  };

  handleNextPage = () => {
    if (this.state.currentPage < this.state.totalNumber / 20) {
      this.setState(
        currentState => ({ currentPage: currentState.currentPage + 1 }),
        () => {
          this.componentWillMount();
        }
      );
    }
  };
  render() {
    return (
      <div>
        {this.state.pokemons.map(pokemon => {
          return (
            <PokemonItem
              key={pokemon.number}
              name={pokemon.name}
              number={pokemon.number}
            ></PokemonItem>
          );
        })}
        <button onClick={this.handlePreviousPage}>Previous</button>
        <button onClick={this.handleNextPage}>Next</button>
      </div>
    );
  }
}
