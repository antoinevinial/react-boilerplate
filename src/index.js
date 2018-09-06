import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import History from './History';
import { Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
	<Router history={History}>
		<Route component={App}/>
	</Router>
), document.getElementById('app'));
registerServiceWorker();