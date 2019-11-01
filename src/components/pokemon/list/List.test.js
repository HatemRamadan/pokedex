import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import { act } from "react-dom/test-utils";
// jest.mock("../../../services/PokemonService");



it("List renders without crashing", () => {
  const div = document.createElement("div");
  act(()=>{
    ReactDOM.render(<List />, div)
  });

  ReactDOM.unmountComponentAtNode(div);

});
