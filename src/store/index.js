import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "../reducer";

const logger = (store) => (next) => (action) => {
    next(action);
}

const middleware = applyMiddleware(reduxThunk, logger);
const store = createStore(reducer, 1, middleware);

store.subscribe( () => {
    console.log('change', store.getState());
})

export default store;