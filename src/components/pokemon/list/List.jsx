import React from "react";
import { Component } from "react";
import PokemonItem from "../item/Item";
import PokemonService from "../../../services/PokemonService";
import "./List.css";
export default class PokemonList extends Component {
  state = { pokemons: [], loaded: false, currentPage: 1, totalNumber: 0 };

  componentWillMount() {
    this.getPokemons();
  }
  getPokemons() {
    PokemonService.getPokemons(this.state.currentPage, 20)
      .then(data => {
        this.setState({
          pokemons: data,
          loaded: true,
          totalNumber: data.pop().count
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handlePreviousPage = () => {
    if (this.state.currentPage > 1) {
      this.setState(
        currentState => ({
          currentPage: currentState.currentPage - 1,
          loaded: false
        }),
        () => {
          this.getPokemons();
        }
      );
    }
  };

  handleNextPage = () => {
    if (this.state.currentPage < this.state.totalNumber / 20) {
      this.setState(
        currentState => ({
          currentPage: currentState.currentPage + 1,
          loaded: false
        }),
        () => {
          this.getPokemons();
        }
      );
    }
  };
  render() {
    return (
      <div>
        <div className="container overflow-auto scrollable-view">
          <div
            className="justify-content-start row"
            hidden={!this.state.loaded}
          >
            {this.state.pokemons.map(pokemon => {
              return (
                <div key={pokemon.number} className="col-md-12 mt-2 hover">
                  <PokemonItem
                    name={pokemon.name}
                    number={pokemon.number}
                  ></PokemonItem>
                </div>
              );
            })}
          </div>
          {!this.state.loaded && (
            <div className="row h-100">
              <div className="col loader-container">
                <div className="loader"></div>
                <p className="text-secondary">Loading Page</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-center mb-1 mt-1">
          <button
            className="btn btn-secondary btn-md mr-2"
            onClick={this.handlePreviousPage}
          >
            Previous
          </button>
          <button
            className="btn btn-secondary btn-md"
            onClick={this.handleNextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
