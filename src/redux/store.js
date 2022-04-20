import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);
const unsubscribe = store.subscribe(()=>{console.log("update: ", store.getState())})

store.dispatch({
    type: "getBook"
})

unsubscribe();

export default store;