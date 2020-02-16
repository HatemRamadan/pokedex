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

const PokemonList = props => {
  useEffect(() => {
    const { getPokemons, page } = props;
    getPokemons(page, 20);
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
                  number={pokemon.number}
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
        <button className="btn btn-secondary btn-md" onClick={props.nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { pokemons: state.pokemons, page: state.page, loading: state.loading };
};
export default connect(
  mapStateToProps,
  { getPokemons, nextPage, prevPage, loadingOn, loadingOff }
)(PokemonList);
