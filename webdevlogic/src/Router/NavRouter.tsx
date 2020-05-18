import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import React from 'react';
import App from "../App"
import { IntlProvider } from 'react-intl';
import { IState } from '../Store/Root/RootState';
import { connect } from 'react-redux';
const NavRouter:React.FC<any>=(props)=>{

 return(
 <IntlProvider locale={props.intlData.locale} messages={props.intlData.messages[props.intlData.locale]}>
    <Router>
      <Switch>
          <Route exact={true} path='/' component={App}/>
      </Switch>
    </Router>
    </IntlProvider>
 )
}
const mapStateToProps = (state:IState) => ({ intlData: state.intl });

export default connect(mapStateToProps)(NavRouter);




