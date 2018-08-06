//applyMiddleware用来处理中间件  action 到  dispatch之间的一个应用
import {createStore,combineReducers,applyMiddleware } from "redux";

import homeReducers from "./reducers/home/homeReducers";
import commonRedure from "./reducers/commonReducers/commonRedure"
//这个是用来处理异步的action
import reduxpromisemiddleware from "redux-promise-middleware";
let reducer = combineReducers({
    homeReducers,
    commonRedure
})

const store = createStore(reducer,applyMiddleware(reduxpromisemiddleware()));

export default store;