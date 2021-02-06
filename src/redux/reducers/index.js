import coordinateReducer from "./coordinates";
import darkReducer from "./darkLight";
import navReducer from "./toggleNavbar";
import loginReducer from "./authentication";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    coordinate : coordinateReducer,
    dark : darkReducer,
    navbar : navReducer,
    loginAuth: loginReducer
})

export default rootReducer;
