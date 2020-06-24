import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import aboutMe from '../Images/aboutme.jpg'


interface IProps{
intl:any
}
const AboutMe:React.FC<IProps>=(props)=>{

  return (
  	<section className="fh5co-about-me">
		<div className="about-me-inner site-container">
			<article className="portfolio-wrapper">
				<div className="portfolio__img">
					<img src={aboutMe}className="about-me__profile" alt="about me profile picture"/>
				</div>
				<div className="portfolio__bottom">
					<div className="portfolio__name">
						<span>R</span>
						<h2 className="universal-h2">ishav Mittal</h2>
					</div>
					<p><FormattedMessage id="LABEL_HEADLINE_TAG"/></p>
				</div>
			</article>
			<div className="about-me__text">
				<div className="about-me-slider">
					<div className="about-me-single-slide">
						<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="LABEL_ABOUT_ME"/></h2>
						<p><span>S</span> 
						<FormattedMessage id="TITLE_EXP"/>			
	<FormattedMessage id="TITLE_EXP1"/>
	<FormattedMessage id="TITLE_EXP2"/>
	<FormattedMessage id="TITLE_EXP3"/>
	<FormattedMessage id="TITLE_EXP4"/>
	<FormattedMessage id="TITLE_EXP5"/>
	<FormattedMessage id="TITLE_EXP6"/>
							</p>
						
					</div>
					
				</div>
			</div>
		</div>
		<div className="about-me-bckg"></div>
	</section>
    
    
  );
}
export default (injectIntl)(AboutMe);
