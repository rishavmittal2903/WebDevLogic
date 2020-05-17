import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import React from 'react';
import App from "../App"
const NavRouter:React.FC<any>=()=>{

 return(
 
    <Router>
      <Switch>
          <Route exact={true} path='/' component={App}/>
      </Switch>
    </Router>
  
 )
}
export default NavRouter;




