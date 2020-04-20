import {combineReducers} from "redux";
import changeValReducer from "./changeValueReducer";
import itemsReducer from "./itemsReducer";
import filterItemsReducer from "./filterItemsReducer";

export const rootReducer = combineReducers({
        inputValue: changeValReducer,
        items: itemsReducer,
        filterItems: filterItemsReducer
})
