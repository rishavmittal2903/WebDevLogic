import { InitialState } from "./InitialState"
import { UPDATE_LANGUAGE } from "../../ActionTypes/Intl/IntlActionType"

export function intlReducer(state = InitialState, action) {
  switch(action.type)
  {
case UPDATE_LANGUAGE:{
    return state;
}
  default:{
      return state;
  }
    
  }
  
}