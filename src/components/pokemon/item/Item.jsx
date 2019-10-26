import React from "react";
import { Component } from "react";
export default class PokemonItem extends Component {
  constructor(props){super(props)}
  state = {};

  render() {
    return <h4>{this.props.number+"  "+this.props.name}</h4>;
  }
}
