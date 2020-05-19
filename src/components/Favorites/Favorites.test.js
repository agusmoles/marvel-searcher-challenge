import React from "react";
import { shallow, mount } from "enzyme";
import Favorites from "./Favorites";

it("should render Favorites correctly", () => {
    const component = shallow(<Favorites />);
    expect(component).toMatchSnapshot();
});



