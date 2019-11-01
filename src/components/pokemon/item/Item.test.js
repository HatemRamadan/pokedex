import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// jest.mock("../../../services/PokemonService");

it("Item renders without crashing", () => {
  const div = document.createElement("div");
  act(()=>{
    ReactDOM.render(<Router><Item number="1" name="test" /></Router>, div)
  });
  ReactDOM.unmountComponentAtNode(div);
  
});