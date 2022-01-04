import { combineReducers } from "@reduxjs/toolkit"
import categoryReducer from "./category.slice"

export const rootReducer = combineReducers({
  category: categoryReducer,
})
