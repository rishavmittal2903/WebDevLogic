import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import footer from '../Images/footer-img.jpg'
import fb from '../Images/fbb.png'
import linkedIn from '../Images/linked.png'
import twitter from '../Images/social-twitter.png'
import git from '../Images/git.png'

interface IProps{
intl:any
}
const Footer:React.FC<IProps>=(props)=>{

  return (
    <footer className="site-footer">
    <div className="site-container">
        <div className="footer-inner">
            <div className="footer-info">
                <div className="footer-info__left">
                    <img src={footer} alt="about me image"/>
                    <a href="https://www.linkedin.com/in/rishav-mittal-aa5b95134/" className="txtDecoration"><p><FormattedMessage id="LABEL_READ_MORE"/></p></a>
                </div>
                <div className="footer-info__right">
                    <h5><FormattedMessage id="LABEL_GET_IN_TOUCH"/></h5>
                    <p className="footer-phone"><FormattedMessage id="LABEL_PHONE"/>: +91-9206134708</p>
                    <p><FormattedMessage id="LABEL_EMAIL"/> : rishavmittal2903@gmail.com</p>
                    <div className="social-icons">
                        <a href="https://twitter.com/RishavM25858663" target="_blank"><img src={twitter} alt="social icon"/></a>
                        <a href="https://www.facebook.com/rishav.mittal.3/" target="_blank"><img src={fb} alt="social icon"/></a>
                        <a href="https://github.com/rishavmittal2903" target="_blank"><img src={git} alt="social icon"/></a>
                        <a href="https://www.linkedin.com/in/rishav-mittal-aa5b95134/" target="_blank"><img src={linkedIn} alt="social icon"/></a>
                    </div>
                </div>
            </div>
            <div className="footer-contact-form">
                <h5><FormattedMessage id="LABEL_CONTACT_FORM"/></h5>
                <form className="contact-form">
                    <div className="contact-form__input">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>
                    <textarea></textarea>
                    <input type="submit" name="submit" value="Submit" className="submit-button"/>
                </form>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
            <p>Author | Rishav Mittal | No rights Reserved | Feel free to take Reference</p>
           
        </div>
    </div>
</footer>
    
    
  );
}
export default (injectIntl)(Footer);
