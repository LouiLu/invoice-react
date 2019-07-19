import React, { Component } from 'react';
import AuthService from '../service/AuthService';
import { withRouter } from 'react-router';

class LoginPage extends Component {
	componentDidMount() {
		document.title = "Login | Invoice System"
	}

	constructor(props) {
		super(props)
		this.Auth = new AuthService()
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            username: '',
            password: ''
        }
	}
	componentWillMount() {
		console.log('LoginPage componentWillMount: ', this.Auth.loggedIn())
		if (this.Auth.loggedIn())
			this.props.history.replace('/');
	}
	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}
	handleSubmit(event) {
		event.preventDefault()
		// alert('someone click')
		console.log(`username is ${this.state.username} and password is ${this.state.password}`);

		this.Auth.login(this.state.username, this.state.password)
		.then(res =>{
			console.log('LoginResponse: ', res)
			this.props.history.replace('/')
		})
		.catch(err =>{
			console.log('LoginError: ', err)
		})
	}

	render() {
		return (
			<div class="container">
				<div class="d-flex justify-content-center h-100">
					<div class="card my-auto">
						<div class="card-header text-dark">
							<h3>Sign In</h3>
							<div class="d-flex justify-content-end login-logo"></div>
						</div>
						<div class="card-body mt-4">
							<form onSubmit={this.handleSubmit}>
								<div class="input-group form-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fas fa-user"></i></span>
									</div>
									<input type="text" class="form-control" name="username" value={this.state.username} onChange={this.handleChange} placeholder="username" />
								</div>
								<div class="input-group form-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fas fa-key"></i></span>
									</div>
									<input type="password" class="form-control" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
								</div>
								<div class="form-group">
									<input type="submit" value="Login" class="btn btn-info login-btn float-right px-4" />
								</div>
							</form>
						</div>
						<div class="card-footer">
							<div class="d-flex justify-content-center links">
								Don't have an account? <a href="register">Sign Up</a>
							</div>
							<div class="d-flex justify-content-center">
								<a href="forgot"> Forgot your password?</a>
							</div>				
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(LoginPage);
