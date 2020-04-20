import {ADD_ITEMS, UPDATE_ITEMS, REMOVE_ITEMS} from "./types";

const initialState = {
    items: []
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            return {items: state.items.concat(action.payload)}
        case UPDATE_ITEMS:
            return {items: action.payload}
        case REMOVE_ITEMS:
            return {items: []}
        default:
            return state
    }
}

export default itemsReducer;
