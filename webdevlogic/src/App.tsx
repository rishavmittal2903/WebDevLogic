import React from 'react';
import {connect} from "react-redux"
import * as actions from "../src/Store/Actions/TestActions"
import './App.css';
import { IState } from './Store/Root/RootState';
import { injectIntl } from 'react-intl';
import TopBar from './Component/TopBar';
import MainSection from './Component/MainSection';
import AboutMe from './Component/AboutMe';
import Projects from './Component/Projects';
import Counter from './Component/Counter';
import Blogs from './Component/Blogs';
import Footer from './Component/Footer';
import Follow from './Component/Follow';




interface IProps{
testData:string,
testAction:()=>void,
intl:any
}
const App:React.FC<IProps>=(props)=>{

  return (
    
    <div>
<TopBar/>
<MainSection/>
<AboutMe/>  
<Projects/>
  <Counter/>
<Blogs/>
<Follow/>
<Footer/>
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
