import {CHANGE_VALUE} from "./types";

const initialState = {
    inputValue: ''
}

const changeValReducer = (state = initialState, action)=> {
    switch(action.type) {
        case CHANGE_VALUE:
            return {inputValue: action.payload}
        default:
            return state
    }
}

export default changeValReducer;
