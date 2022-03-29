import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducers";
import test from "./test";

const reducers = combineReducers({
  repositories: repositoriesReducer,
  test: test,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
