import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PokemonService from "../../../services/PokemonService";

export default class PokemonItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  handleOnHover = () =>{
    PokemonService.getPokemonDetails(this.props.number);
  }
  render() {
    return (
      <div onMouseEnter={this.handleOnHover}>
        <Link to={"/" + this.props.number}>
          <h5>{this.props.number + "  " + this.props.name.substring(0,1).toUpperCase()+this.props.name.substring(1)}</h5>
        </Link>
      </div>
    );
  }
}
