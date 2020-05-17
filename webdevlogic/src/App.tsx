import React from 'react';
import {connect} from "react-redux"
import * as actions from "../src/Store/Actions/TestActions"
import './App.css';
import { IState } from './Store/Root/RootState';


interface IProps{
testData:string,
testAction:()=>void
}
const App:React.FC<IProps>=(props)=>{
  return (
    <div className="App">
          {props.testData}<br/>
      <button onClick={()=>props.testAction()}>Click here to change the name</button>
    </div>
  );
}
const mapStateToProps=(state:IState)=>({
testData:state.test.data.firstName
})
const mapDispatchToProps=dispatch=>{
  return{
  testAction:()=>dispatch(actions.TestAction())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
