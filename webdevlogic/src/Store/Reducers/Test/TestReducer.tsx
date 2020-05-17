import { InitialState } from "./InitialState";


const testSuccess=(oldState,action)=>{
  oldState.data.firstName=action.payload;
     return{...oldState}
}
 const TestReducer = (
  oldState=InitialState,
action
)=> {
  switch (action.type) {
    case "TEST":
     return testSuccess(oldState,action);

    default:
      return oldState;
  }
};
export default TestReducer;


