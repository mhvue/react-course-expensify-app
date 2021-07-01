// react-test-renderer
import React from "react";
import {Header} from "../../components/Header";
import { shallow } from "enzyme";

test("should render Header correctly", () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header startLogout={() => {}}/>);
    //expect(wrapper.find("h1").text()).toBe("Expensify");
    expect(wrapper).toMatchSnapshot();

});

test("should call startLogout on button click", () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout = {startLogout}/>)
    wrapper.find("button").simulate("click");
    expect(startLogout).toHaveBeenCalled();
});