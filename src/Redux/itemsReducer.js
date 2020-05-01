import {ADD_ITEMS, UPDATE_ITEMS, REMOVE_ITEMS} from "./types";

const initialState = {
    items: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return {...state, items: state.items.concat(action.payload)}
        case UPDATE_ITEMS:
            return {...state, items: action.payload}
        case REMOVE_ITEMS:
            return {...state, items: []}
        default:
            return state
    }
}

export default itemsReducer;
