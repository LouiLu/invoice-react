import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AuthService from './components/service/AuthService';
import AuthHeader from './components/service/AuthHeader';
const Auth = new AuthService();

class App extends Component {
	handleLogout(){
		console.log('App handleLogout')
		Auth.logout()
		this.props.history.replace('/login');
	}

	render() {
		return (
			<div className="App">
				<div id="sidebar-wrapper" className="wrapper h-100">
					<Navbar />
					<section id="content">
						<Switch>
							<Route exact path="/" component={Dashboard} />
						</Switch>
					</section>
				</div>
			</div>
		);
	}
}

export default AuthHeader(App);
