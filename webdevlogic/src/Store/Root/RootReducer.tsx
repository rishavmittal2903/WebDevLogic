import {combineReducers } from "redux";
import TestReducer from '../Reducers/Test/TestReducer'
import { IState } from "./RootState";
export default combineReducers<IState>({
  test:TestReducer
  });