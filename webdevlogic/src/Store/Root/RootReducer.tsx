import {combineReducers } from "redux";
import TestReducer from '../Reducers/Test/TestReducer'
import { IState } from "./RootState";
import { intlReducer } from "../Reducers/Intl.tsx/IntlReducer";
export default combineReducers<IState>({
  test:TestReducer,
  intl:intlReducer
  });