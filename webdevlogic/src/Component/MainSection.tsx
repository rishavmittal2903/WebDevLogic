import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import topbanner from "../Images/banner.jpg"


interface IProps{
intl:any
}
const MainSection:React.FC<IProps>=(props)=>{

  return (
  	<section className="fh5co-top-banner">
		<div className="top-banner__inner site-container">
			<div className="top-banner__image">
				<img src={topbanner} alt="author image"/>
			</div>
			<div className="top-banner__text">
				<div className="top-banner__text-up">
					<span className="brand-span"><FormattedMessage id="LABEL_TITLE"/></span>
					<h2 className="top-banner__h2">Rishav Mittal</h2>
				</div>
				<div className="top-banner__text-down">
					<span className="brand-span"><FormattedMessage id="LABEL_DOMAIN"/></span>
				</div>
				<p><FormattedMessage id="LABEL_HEADLINE"/></p>
				<a href="https://www.linkedin.com/in/rishav-mittal-aa5b95134/" target="_blank" className="brand-button"><FormattedMessage id="LABEL_BIO"/> </a>
			</div>
		</div>
	</section>
   );
}
export default (injectIntl)(MainSection);
