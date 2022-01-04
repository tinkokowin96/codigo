import { createStore } from "@reduxjs/toolkit"
// import logger from "redux-logger"
import { rootReducer } from "./root-reducer"

// const middlewares = []
// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger)
// }

export const store = createStore(rootReducer)
// export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export type AppDispatch = typeof store.dispatch
