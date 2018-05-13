import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import Reducer from "./Reducer";

const middleware = applyMiddleware(promise(), thunk, logger);

/**
 * Creating and Exporting the Store
 */
export default createStore(Reducer, middleware);