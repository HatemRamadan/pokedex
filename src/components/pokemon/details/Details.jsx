import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPokemonDetails, selectPokemon } from "../../../actions";
import "./Details.css";
import Popup from "../image-popUp/PopUp";

const cardStyle = {
  width: "20rem",
  backgroundColor: "#e6cdac",
  height: "55vh"
};
const PokemonDetails = props => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const { getPokemonDetails, selectedPokemon } = props;
    setImageLoaded(false);
    getPokemonDetails(selectedPokemon);
  }, [props.selectedPokemon]);

  useEffect(() => {
    props.selectPokemon(props.number.match.url.replace("/pokedex/", ""));
  }, [props.number.match.url]);

  const { image, name, stats } = props.details;

  if (!props.details.stats) return <div></div>;
  return (
    <div className="my-card text-center">
      <img
        src={image}
        className="card-img-top text-center"
        onLoad={() => setImageLoaded(true)}
        hidden={!imageLoaded}
        onClick={() => setShowPopUp(!showPopUp)}
      ></img>
      {!imageLoaded && (
        <img src="/pokedex/loading_pokemon.png" className="card-img-top"></img>
      )}
      <div className="card-body" hidden={!imageLoaded}>
        <div
          className="card-title text-center pokemon-name"
          style={{ color: "#005aff" }}
        >
          {name}
        </div>
        <div className="card-text pokemon-stats">
          <div className="row no-gutters">
            {stats.map(stat => {
              return (
                <div
                  className="col-lg-6 col-md-6 col-sm-6 col-6 text-left"
                  key={stat.name}
                >
                  <span style={{ color: "#cd3939" }}>
                    {stat.name.substring(0, 1).toUpperCase() +
                      stat.name.substring(1).replace("-", " ") +
                      ": "}
                  </span>
                  <span className="text-muted">{stat.value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {showPopUp ? (
        <Popup closePopup={() => setShowPopUp(!showPopUp)}></Popup>
      ) : null}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    selectedPokemon: state.selectedPokemon,
    details: state.pokemonDetails
  };
};
export default connect(
  mapStateToProps,
  { getPokemonDetails, selectPokemon }
)(PokemonDetails);
