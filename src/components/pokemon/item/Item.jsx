import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class PokemonItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <div>
        <Link to={"/" + this.props.number}>
          <h4>{this.props.number + "  " + this.props.name}</h4>
        </Link>
      </div>
    );
  }
}
