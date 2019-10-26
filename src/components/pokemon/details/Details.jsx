import React from "react";
import { Component } from "react";
import PokemonService from "../../../services/PokemonService";

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);
  }
  state = { number: 0, image: "", types: [], stats: [] };
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
          types: data.types,
          stats: data.stats
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="text-center">
        <h4>Pokemon Details</h4>
        <img src={this.state.image} placeholder="Pokemon fromt image"></img>
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
