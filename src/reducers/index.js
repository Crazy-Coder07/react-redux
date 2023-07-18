// we can create the multiple reducers according to 
// the requirement like updown.js and finnaly use one root user in index.js

import changeTheNumber from "./updown";

import {combineReducers} from "redux"

const rootReducer=combineReducers({
    changeTheNumber
})

export default rootReducer;