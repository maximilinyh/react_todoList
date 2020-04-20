import {CHANGE_VALUE, ADD_ITEMS, UPDATE_ITEMS, REMOVE_ITEMS, SET_FILTER} from "./types";

export function changeValueForm(value) {
    return {
        type: CHANGE_VALUE,
        payload: value
    }
}

export function addItems(item) {
    return {
        type: ADD_ITEMS,
        payload: item
    }
}

export function updateItems(items) {
    return {
        type: UPDATE_ITEMS,
        payload: items
    }
}

export function removeAllItems() {
    return {
        type: REMOVE_ITEMS
    }
}
export function setFilter(filter) {
    return {
        type: SET_FILTER,
        payload: filter
    }
}

