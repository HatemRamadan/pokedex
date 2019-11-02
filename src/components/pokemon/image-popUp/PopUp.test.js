import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Popup from "./PopUp";
configure({ adapter: new Adapter() });

it("image Pop up renders without errors and have correct state", async () => {
  //mocking the details component since it sends a function through props to the image pop up
  const Details = {
    closePopup: jest.fn()
  };
  const wrapper = await shallow(<Popup closePopup={Details.closePopup} />);
  const instance = wrapper.instance();

  //clicking anywhere on the pop up which should close the pop up
  wrapper
    .find("div")
    .at(0)
    .simulate("click");
  //testing if the pop up was closed as expected  
  expect(Details.closePopup).toHaveBeenCalled();
});
