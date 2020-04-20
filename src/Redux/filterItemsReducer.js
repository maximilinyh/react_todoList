import {SHOW_ALL, SET_FILTER} from "./types";

const initialState = {
    filter: SHOW_ALL
}

export const filterItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {filter: action.payload}
        default:
            return state
    }
}

export default filterItemsReducer;
