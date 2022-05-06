import {combineReducers, createStore} from "redux";
import catalogReducer from "./catalogReducer";
import feedbackReducer from "./feedbackReducer";
import userReducer from "./userReducer";
import orderReducer from "./orderReducer";

let reducers = combineReducers({
    catalog: catalogReducer,
    feedbackk: feedbackReducer,
    userData: userReducer,
    orderrr: orderReducer
})

let store = createStore(reducers)
export default store