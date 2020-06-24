import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';

interface IProps{
intl:any
}
const TopBar:React.FC<IProps>=(props)=>{

  return (
    <div>
    <nav className="site-navigation">
		<div className="site-navigation-inner site-container portfolio">
			<FormattedMessage id="HEADER_TITLE"/>
			<div className="main-navigation">
				<ul className="main-navigation__ul">
					<li><a href="#"><FormattedMessage id="LABEL_HOME"/></a></li>
					<li><a href="#"><FormattedMessage id="LABEL_ABOUT_ME"/></a></li>
					<li><a href="#"><FormattedMessage id="LABEL_PROJECT"/></a></li>
					<li><a href="#"><FormattedMessage id="LABEL_SKILLS"/></a></li>
					<li><a href="#"><FormattedMessage id="LABEL_CONTACT"/></a></li>
				</ul>
			</div>
			<div id="myBtn" className="burger-container" >
				<div className="bar1"></div>
				<div className="bar2"></div>
				<div className="bar3"></div>
			</div>
		

		</div>
	</nav>
  </div>
  );
}
export default (injectIntl)(TopBar);
