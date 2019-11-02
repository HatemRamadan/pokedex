import React from "react";
import "./PopUp.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup" onClick={this.props.closePopup}>
        <div className="popup\_inner text-center">
          <img
            src={this.props.image}
            className=""
            width="40%"
            height="40%"
          ></img>
          <p>
          <span className="text-warning">Types: </span>
          {this.props.types.map(type => {
            return <span key={type}>{type + " "}</span>;
          })}</p>
          <button className="btn btn-secondary" onClick={this.props.closePopup}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
