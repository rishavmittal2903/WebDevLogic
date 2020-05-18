import React from 'react';
import {connect} from "react-redux"
import * as actions from "../src/Store/Actions/TestActions"
import './App.css';
import { IState } from './Store/Root/RootState';
import { FormattedMessage } from 'react-intl';
import { injectIntl } from 'react-intl';

interface IProps{
testData:string,
testAction:()=>void,
intl:any
}
const App:React.FC<IProps>=(props)=>{


  return (
    <div className="App">
          {props.testData}<br/>
      <button onClick={()=>props.testAction()}>Click here to change the name</button>
      <br/>
      TRANSLATION
      <p>
        <FormattedMessage id="test"/>
      </p>
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
export default (injectIntl)(connect(mapStateToProps,mapDispatchToProps)(App));
