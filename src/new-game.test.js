import React from "react";
import {shallow,mount} from "enzyme";

import NewGame from "./new-game";

describe("<NewGame />", ()=>{
    it("Renders without issue", ()=>{
        shallow(<NewGame />)
    })
})