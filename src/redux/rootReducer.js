import { homeReducer, updateReducer } from './reducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    home: homeReducer,
    update: updateReducer
})

export default rootReducer;