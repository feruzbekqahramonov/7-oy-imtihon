import { counterStore } from "./counter.js";
import { combineReducers, createStore } from "redux";
import {cardReducer} from './addCard.js'
const rootReducer = combineReducers({
    counter: counterStore,
    cards:  cardReducer
});

export const store = createStore(rootReducer)