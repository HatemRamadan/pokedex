import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getPokemons,
  nextPage,
  prevPage,
  loadingOn,
  loadingOff
} from "../../../actions";
import PokemonItem from "../item/Item";
import "./List.css";

type PokemonListProps = {
  page: number;
  pokemons: Record<string, string>[];
  getPokemons: Function;
  prevPage: Function;
  nextPage: Function;
  loading: boolean;
  numberOfPokemons: number;
};
const PokemonList = (props: PokemonListProps) => {
  const PAGE_SIZE = 20;

  useEffect(() => {
    const { getPokemons, page } = props;
    getPokemons(page, PAGE_SIZE);
  }, [props.page]);

  return (
    <div>
      <div className="container overflow-auto scrollable-view">
        <div className="justify-content-start row" hidden={props.loading}>
          {props.pokemons.map(pokemon => {
            return (
              <div key={pokemon.number} className="col-md-12 mt-2 hover">
                <PokemonItem
                  name={pokemon.name}
                  number={Number(pokemon.number)}
                ></PokemonItem>
              </div>
            );
          })}
        </div>
        {props.loading && (
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
          onClick={() => {
            if (props.page > 1) props.prevPage();
          }}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary btn-md"
          onClick={() => {
            if (props.numberOfPokemons / PAGE_SIZE > props.page)
              props.nextPage();
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    pokemons: state.pokemons,
    page: state.page,
    loading: state.loading,
    numberOfPokemons: state.numberOfPokemons
  };
};
export default connect(
  mapStateToProps,
  { getPokemons, nextPage, prevPage, loadingOn, loadingOff }
)(PokemonList);
