import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import download from '../Images/download.png'


interface IProps{

intl:any
}
const Follow:React.FC<IProps>=(props)=>{

  return (
	<div>
	<section className="fh5co-quotes">
		<div className="site-container">
			<div className="about-me-slider">
				<div>
					<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="TITLE_GIT_REPO"/></h2>
					<p>“Provide common platform for any client to integrate with instamojo payment gateway. It is built on node js express api.” <a href="https://paymentgatewayapp.herokuapp.com" target="_blank" title="Demo Link" className="txtDecoration textColor"><strong>Demo</strong></a></p>
					
					<a href="https://github.com/rishavmittal2903/PaymentGateway" target="_blank" className="txtDecoration"  title="Click here to go"><h4 >Payment Gateway</h4></a>
				</div>
				<div>
					<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="TITLE_GIT_REPO"/></h2>
					<p>“Generic typeahead with debounce functionality that can be configured by user. This search asynchronously and displayed the data with two format. Normal text and Image with email id. Easy to configure built on <strong>React-Typescript</strong> “</p>
					<a href="https://github.com/rishavmittal2903/DebounceTypeahead" target="_blank" className="txtDecoration"  title="Click here to go"><h4 >Debounce Typeahead</h4></a>

				</div>
				<div>
					<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="TITLE_GIT_REPO"/></h2>
					<p>“This package convert any kind of complex json schema reference into normalized json structure.<a target="_blank" href="https://www.npmjs.com/package/jsonschematojson"title="click here" className="txtDecoration textColor"><strong > NPM PACKAGE</strong></a>“</p>
					<a href="https://github.com/rishavmittal2903/JsonSchemaToJson" target="_blank" className="txtDecoration"  title="Click here to go"><h4 >Normalized JsonSchema</h4></a>

				</div>
				<div>
					<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="TITLE_GIT_REPO"/></h2>
					<p>“This library will provide you the functionality to convert any text into any language. Which is configurable by user to select any language to convert. It is built on <strong>.Net Standard</strong>“</p>
					<a href="https://github.com/rishavmittal2903/LanguageConvertor" target="_blank" className="txtDecoration"  title="Click here to go"><h4 >Language Convertor</h4></a>

				</div>
				<div>
					<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="TITLE_GIT_REPO"/></h2>
					<p>“This library will provide you the functionality to create a pubsub server. Where publisher and subscriber can access the communication. It is built on <strong>ASP.Net Core</strong>“</p>
					<a href="https://github.com/rishavmittal2903/PubSubServer" target="_blank" className="txtDecoration"  title="Click here to go"><h4 >PubSub Server</h4></a>

				</div>
				<div>
					<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="TITLE_GIT_REPO"/></h2>
					<p>“This application will work offline and cache all the get api's response.Which send back to UI if application internet goes down. “</p>
					<a href="https://github.com/rishavmittal2903/ServiceWorker" target="_blank" className="txtDecoration"  title="Click here to go"><h4 >Service Worker</h4></a>

				</div>
				<div>
					<h2 className="universal-h2 universal-h2-bckg"><FormattedMessage id="TITLE_GIT_REPO"/></h2>
					<p>“This generic application will provide a platform to send mail to anyone using gmail gateway. Easy to configurable and built on <strong>Node js</strong>“</p>
					<a href="https://github.com/rishavmittal2903/Email" target="_blank" className="txtDecoration"  title="Click here to go"><h4 >Email Provider</h4></a>

				</div>
			</div>
		</div>
	</section>
  
	<section className="fh5co-social">
		<div className="site-container">
			<div className="social">
				<h5>Download Resume!!</h5>
				<div className="social-icons cursor" title="Download Resume">
   <img src={download} alt="download resume" />
				</div>
				<h5>Share it!</h5>
			</div>
			
		</div>
	</section>
    </div>

 
    
  );
}

export default (injectIntl)(Follow);
