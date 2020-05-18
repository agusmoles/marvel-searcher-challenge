import React from "react";
import { shallow, mount } from "enzyme";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

it("should render Navbar correctly", () => {
    const component = shallow(<Navbar />);
    expect(component).toMatchSnapshot();
});

describe("SearchBar", () => {
    const component = mount(<SearchBar />);

    it("should render SearchBar correctly", () => {
        expect(component).toMatchSnapshot();
    });

    it("SearchBar input state changes correctly", () => {
        component.find("input").simulate("change", {
            target: {
                value: "spider",
            },
        });

        expect(component.find("input").prop("value")).toEqual("spider");
    });
});
