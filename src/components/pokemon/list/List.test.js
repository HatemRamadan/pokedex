import List from "./List";
import React from "react";
import axios from "axios";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

//mocking axios by mocking the response axios would retrieve
jest.mock("axios");
const resp = { data: { results: [{ url: "1", name: "name" }], count: 1 } };

it("List renders without errors and have correct state", async () => {
  axios.get.mockResolvedValue(resp);
  const wrapper = await shallow(<List />);
  const instance = wrapper.instance();
  await instance.componentDidMount();
  const handleNextPage = jest.spyOn(instance, "handleNextPage");
  const handlePreviousPage = jest.spyOn(instance, "handlePreviousPage");
  instance.forceUpdate();

  //testing if API call/cache retrieval were performed in componentDidMount()
  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/", {
    params: { limit: 20, offset: 0 }
  });

  //simulating clicking on next page
  wrapper
    .find("button")
    .at(1)
    .simulate("click");
  expect(handleNextPage).toHaveBeenCalled();
  expect(instance.state.currentPage).toBe(1);

  //simulating clicking on previous page
  await wrapper
    .find("button")
    .at(0)
    .simulate("click");
  expect(handlePreviousPage).toHaveBeenCalled();

  //testing if component state values are assigned correctly
  expect(instance.state.totalNumber).toBe(1);
  expect(instance.state.loaded).toBe(true);
  expect(instance.state.pokemons).toHaveLength(1);
});
