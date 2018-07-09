import React from "react";
import {shallow, mount} from "enzyme";

import Alert from "./guess-alert";

describe ("<Alert />", ()=>{
    it("Renders without issue", ()=>{
        shallow(<Alert />);
    });

    it("Provides the winning response", ()=>{
        const testGuess = 50;
        const testSecretNum = 50;
        const feedback="Great Job! You win!"

        const wrapper = shallow(<Alert guess={testGuess} secretNum={testSecretNum}/>);

        expect(wrapper.text()).toEqual(feedback);
    });

    it("Provides the Freezing response", ()=>{
        const testGuess = 1;
        const testSecretNum = 70;
        const feedback="Freezing"

        const wrapper = shallow(<Alert guess={testGuess} secretNum={testSecretNum}/>);

        expect(wrapper.text()).toEqual(feedback);
    });
})