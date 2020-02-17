import React, { MouseEvent } from "react";
import { connect } from "react-redux";
import "./PopUp.css";

type PopUpProps = {
  image: string;
  types: [];
  closePopup: (e: MouseEvent) => any;
};
const Popup = (props: PopUpProps) => {
  const { image, types, closePopup } = props;
  return (
    <div className="popup" onClick={closePopup}>
      <div className="popup\_inner text-center">
        <img src={image} className="" width="40%" height="40%"></img>
        <p>
          <span className="text-warning">Types: </span>
          {types.map(type => {
            return <span key={type}>{type + " "}</span>;
          })}
        </p>
        <button className="btn btn-secondary" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    image: state.pokemonDetails.image,
    types: state.pokemonDetails.types
  };
};
export default connect(mapStateToProps)(Popup);
