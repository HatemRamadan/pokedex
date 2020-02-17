import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import {PokemonService} from "../../../services/PokemonService";
import "./Item.css";

const PokemonItem = props => {
  // const handleOnHover = () => {
  //   PokemonService.getPokemonDetails(props.number);
  // };

  return (
    <div
    // onMouseEnter={handleOnHover}
    >
      <Link style={{ color: "#005aff" }} to={"/pokedex/" + props.number}>
        <div className="pokemon-item">
          {props.number +
            ". " +
            props.name.substring(0, 1).toUpperCase() +
            props.name.substring(1)}
        </div>
      </Link>
    </div>
  );
};

export default PokemonItem;
