import React from "react";
import Details from "./Details";
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
    forms:[{name:"name"}],
    sprites:{front_default:"/pokedex/loading_pokemon.png"}
  }
};


it("Details renders without errors and have correct state", async () => {
  axios.get.mockResolvedValue(resp);
  const wrapper = await shallow(<Details number={{ match: { url: "1" } }} />);
  const instance = wrapper.instance();
  await instance.componentDidMount();
  const togglePopup = jest.spyOn(instance, "togglePopup");
  const handleLoaded = jest.spyOn(instance, "handleLoaded");
  instance.forceUpdate();
  //simulating clicking on pokemon image (a pop up should appear)
  wrapper
    .find("img")
    .at(0)
    .simulate("click");
  expect(togglePopup).toHaveBeenCalled(); //testing if the pop up is going to be shown
  expect(axios.get).toHaveBeenCalled();  
  expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1");
  expect(instance.state.showPopup).toBe(true); //since the image was clicked, the pop up should be show
  
  //testing if component state values are assigned correctly
  expect(instance.state.number).toBe("1"); 
  expect(instance.state.name).toBe("Name");
  expect(instance.state.types).toHaveLength(1);
  expect(instance.state.stats).toHaveLength(1);
  expect(instance.state.image).toBe("/pokedex/loading_pokemon.png");

});
