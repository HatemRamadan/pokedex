import React from "react";
import { Component } from "react";
import PokemonService from "../../../services/PokemonService";

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    number: 0,
    name: "",
    image: "",
    loaded: false,
    types: [],
    stats: []
  };
  componentDidMount() {
    this.setState(
      currentState => ({
        number: this.props.number.match.url.replace("/", "")
      }),
      () => {
        this.getPokemonDetails();
      }
    );
  }
  componentDidUpdate(prevProps) {
    if (this.props.number.match.url !== prevProps.number.match.url) {
      this.setState(
        currentState => ({
          number: this.props.number.match.url.replace("/", "")
        }),
        () => {
          this.getPokemonDetails();
        }
      );
    }
  }
  getPokemonDetails() {
    PokemonService.getPokemonDetails(this.state.number)
      .then(data => {
        this.setState({
          image: data.image,
          name: data.name,
          types: data.types,
          stats: data.stats
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleLoaded = () => {
    this.setState({ loaded: true });
  };
  render() {
    return (
      <div>
        <h4>Pokemon Details</h4>

        <img
          width="150"
          height="150"
          src={this.state.image}
          onLoad={this.handleLoaded}
          hidden={!this.state.loaded}
          placeholder="Pokemon front image"
        ></img>
        {!this.state.loaded && (
          <img src="/loading_pokemon.png" width="150" height="150"></img>
        )}
        <h4 className="ml-4">{this.state.name}</h4>
        <p>
          <span className="text-warning">Types: </span>
          {this.state.types.map(type => {
            return <span key={type}>{type + " "}</span>;
          })}
        </p>
        {this.state.stats.map(stat => {
          return (
            <p key={stat.name}>
              <span className="text-warning">{stat.name + ": "}</span>
              <span>{stat.value}</span>
            </p>
          );
        })}
      </div>
    );
  }
}
