import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Testing if App component renders without errors
it("App renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
