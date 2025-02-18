import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/login" component={LoginPage} />
		</div>
	</BrowserRouter>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
