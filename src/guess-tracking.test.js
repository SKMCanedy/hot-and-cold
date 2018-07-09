import React from "react";
import {shallow, mount} from "enzyme";

import Tracking from "./guess-tracking";

describe("<Tracking />", ()=>{
    it("Renders without issue", ()=>{
        const guesses = [1,2,3];
        shallow(<Tracking guessArray={guesses}/>);
    });

})