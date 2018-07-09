import React from "react";
import {shallow,mount} from "enzyme";

import Count from "./guess-count";

describe("<Count />", ()=>{
    it("Renders without issue", ()=>{
        shallow(<Count />);
    });

    it("Displays the proper guess number", ()=>{
        const testCount = 8;
        const testPhrase = "Attempt # 8 "
        const wrapper = shallow(<Count count={testCount}/>);
        expect(wrapper.text()).toEqual(testPhrase);
    })
})