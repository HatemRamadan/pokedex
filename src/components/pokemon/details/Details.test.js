import React from "react";
import ReactDOM from "react-dom";
import Details from "./Details";
import axios from 'axios';
import { act } from "react-dom/test-utils";
jest.mock('axios');

it("Details renders without crashing", () => {
  const div = document.createElement("div");
  const resp = {name: "name"};
  axios.get.mockResolvedValue(resp);
  act(()=>{
      const number = {match:{url:"1"}}
    ReactDOM.render(<Details number={number}/>, div)
  });
  ReactDOM.unmountComponentAtNode(div);
  
});