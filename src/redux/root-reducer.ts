import { combineReducers } from "redux";
import { workreducer } from "./work/work.reducer";

export const rootReducer = combineReducers({
  work: workreducer,
});
