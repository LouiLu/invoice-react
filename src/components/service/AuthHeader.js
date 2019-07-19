import React, { Component } from 'react';
import AuthService from './AuthService';

export default function AuthHeader(AuthComponent) {
	const Auth = new AuthService();
	return class AuthWrapped extends Component {
		constructor() {
			super();
			this.state = {
				user: null
			}
		}
		componentWillMount() {
			console.log('AuthHeader componentWillMount')
			if (!Auth.loggedIn()) {
				console.log('AuthHeader not loggedIn')
				this.props.history.replace('/login')
			}
			else {
				console.log('AuthHeader loggedIn', this.props.history)
				try {
					const profile = Auth.getProfile()
					console.log('AuthHeader profile: ', profile)
					this.setState({
						user: profile
					})
				}
				catch(err){
					Auth.logout()
					this.props.history.replace('/login')
				}
			}
		}
		render() {
			console.log('AuthHeader render: ', this.props.history)
			if (this.state.user) {
				return (
					<AuthComponent history={this.props.history} user={this.state.user} />
				)
			}
			else {
				return null
			}
		}
	}
}
