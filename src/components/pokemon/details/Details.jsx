import React from "react";
import { Component } from "react";
import PokemonService from "../../../services/PokemonService";
import "./Details.css";

const cardStyle = { width: "22rem", backgroundColor: "#ccdbe8" };
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
          number: this.props.number.match.url.replace("/", ""),
          loaded: false
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
        {/* <img
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
              <span className="text-warning">
                {stat.name.substring(0, 1).toUpperCase() +
                  stat.name.substring(1) +
                  ": "}
              </span>
              <span>{stat.value}</span>
            </p>
          );
        })} */}
        <div className="card" style={cardStyle}>
          <img
            src={this.state.image}
            className="card-img-top"
            onLoad={this.handleLoaded}
            hidden={!this.state.loaded}
          ></img>
          {!this.state.loaded && (
            <img src="/loading_pokemon.png" className="card-img-top"></img>
          )}
          <div className="card-body">
            <h4 className="card-title text-primary text-center">
              {this.state.name}
            </h4>
            <h6 className="card-text">
              <div className="row no-gutters">
                {this.state.stats.map(stat => {
                  return (
                    <div className="col-sm-6 text-left" key={stat.name}>
                      <span className="text-danger">
                        {stat.name.substring(0, 1).toUpperCase() +
                          stat.name.substring(1) +
                          ": "}
                      </span>
                      <span className="text-muted">{stat.value}</span>
                    </div>
                  );
                })}
              </div>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
