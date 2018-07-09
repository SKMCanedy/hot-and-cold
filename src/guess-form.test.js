import React from "react";
import {shallow,mount} from "enzyme";

import Form from "./guess-form"

describe ("<Form />", ()=>{
    it("Renders without issue", ()=>{
        shallow(<Form />);
    });

    // Need to review with mentor
    // it("Should provide the proper value to app.js", ()=>{
    //     const testValue = 8;
    //     const wrapper = mount(<Form value={testValue}/>);
    //     wrapper.simulate('submit');
    //     expect(wrapper.state().guess).toEqual(testValue);
    // })
})