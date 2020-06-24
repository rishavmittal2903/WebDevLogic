import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import security from '../Images/security.jpg'
import time from '../Images/time.jpg'
import medical from '../Images/medi.jpg'
import blog3 from '../Images/doc.png'

interface IProps{
intl:any
}
const Blogs:React.FC<IProps>=(props)=>{

  return (
    <section className="fh5co-blog">
		<div className="site-container">
			<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="LABEL_MY_PROJECTS"/></h2>
			<div className="blog-slider blog-inner">
			<div className="single-blog">
					<div className="single-blog__img">
						<img src={security} alt="blog image"/>
					</div>
					<div className="single-blog__text">
						<h4>Home Security System</h4>
						<span>On August 06, 2018</span>
						<p>
						<FormattedMessage id="DESCRIPTION_PROJ1"/>
						</p>
					</div>
				</div>
				<div className="single-blog">
					<div className="single-blog__img">
						<img src={medical} alt="blog image"/>
					</div>
					<div className="single-blog__text">
						<h4>Medical Healthcare</h4>
						<span>On June 19, 2017</span>
						<p>
						<FormattedMessage id="DESCRIPTION_PROJ2"/>
						</p>
					</div>
				</div>
				<div className="single-blog">
					<div className="single-blog__img">
						<img src={time} alt="blog image"/>
					</div>
					<div className="single-blog__text">
						<h4>My Time</h4>
						<span>On June 18, 2015</span>
						<p>
							<FormattedMessage id="DESCRIPTION_PROJ3"/>
						</p>
					</div>
				</div>
				<div className="single-blog">
					<div className="single-blog__img">
						<img src={blog3} alt="blog image"/>
					</div>
					<div className="single-blog__text">
						<h4>The Confluence</h4>
						<span>On Feb 13, 2015</span>
						<p>
						<FormattedMessage id="DESCRIPTION_PROJ4"/>

						</p>
					</div>
				</div>
				<div className="single-blog">
					<div className="single-blog__img">
						<img src={blog3} alt="blog image"/>
					</div>
					<div className="single-blog__text">
						<h4>TNM & FPP</h4>
						<span>On March 21, 2015</span>
						<p>
						<FormattedMessage id="DESCRIPTION_PROJ5"/>
						</p>
					</div>
				</div>
				
				
				
			</div>
		</div>
	</section>
  
    
  );
}
export default (injectIntl)(Blogs);
