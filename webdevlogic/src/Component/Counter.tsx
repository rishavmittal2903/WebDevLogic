import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import project from '../Images/project.png'
import git from '../Images/git.png'
import pixel from '../Images/pixel.png'
import awards from '../Images/counter-4.png'


interface IProps{
intl:any
}
const Counter:React.FC<IProps>=(props)=>{

  return (
    <div className="fh5co-counter counters">
    <div className="counter-inner site-container">
        <div className="single-count">
            <span className="count" data-count="18">0</span>
            <div className="single-count__text">
                <img src={project} alt="counter icon"/>
                <p><FormattedMessage id="LABEL_PROJECT"/></p>
            </div>
        </div>
        <div className="single-count">
            <span className="count" data-count="20">0</span>
            <div className="single-count__text">
                <img src={git} alt="counter icon"/>
                <p><FormattedMessage id="LABEL_GIT"/></p>
            </div>
        </div>
        <div className="single-count">
            <span className="count" data-count="5343">0</span>
            <div className="single-count__text">
                <img src={pixel} alt="counter icon"/>
                <p><FormattedMessage id="LABEL_PIXEL"/></p>
            </div>
        </div>
        <div className="single-count">
            <span className="count" data-count="8">0</span>
            <div className="single-count__text">
                <img src={awards} alt="counter icon"/>
                <p><FormattedMessage id="LABEL_AWARD"/></p>
            </div>
        </div>
    </div>
</div>
    
  );
}
export default (injectIntl)(Counter);
