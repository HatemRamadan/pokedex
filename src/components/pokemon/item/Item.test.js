import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Item from "./Item";
import axios from "axios";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

//mocking axios by mocking the response axios would retrieve
jest.mock("axios");
const resp = {
  data: {
    types: [{ type: { name: "type" } }],
    stats: [{ base_stat: 100, stat: { name: "stat name" } }],
    forms: [{ name: "name" }],
    sprites: { front_default: "/pokedex/loading_pokemon.png" }
  }
};

it("Item renders without errors and have correct state", async () => {
  axios.get.mockResolvedValue(resp);
  const wrapper = await shallow(<Item number="1" name="test" />);
  const instance = wrapper.instance();
  const handleOnHover = jest.spyOn(instance, "handleOnHover");
  instance.forceUpdate();

  //simulating hovering over pokemon item which should send API call/retrieve from cache. (smart-pre caching)
  wrapper
    .find("div")
    .at(0)
    .simulate("mouseenter");

  expect(handleOnHover).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1");
});
