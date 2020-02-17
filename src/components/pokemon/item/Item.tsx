import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Item.css";

type PokemonItem = {
  number: number;
  name: string;
};
const PokemonItem = (props: PokemonItem) => {
  return (
    <div>
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
