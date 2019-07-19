import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default class AuthService {
    // Initializing important variables
    constructor(domain) {
        this.domain = domain || 'http://localhost' // API server domain
        this.login = this.login.bind(this)
		this.getProfile = this.getProfile.bind(this)
    }

	setToken(idAccess, idRefresh) {
		// Saves user token to localStorage
		localStorage.setItem('id_access', idAccess)
		localStorage.setItem('id_refresh', idRefresh)
	}
	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem('id_access')
	}
	getProfile() {
		// return localStorage.getItem('id_access')
		return jwtDecode(this.getToken())
	}
	isAccessTokenExpired() {
		try {
			const idaccess = localStorage.getItem('id_access')
			const decoded = jwtDecode(idaccess)
			if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
				return true;
			}
			else
				return false;
		}
		catch (err) {
			return false;
		}
	}

	login(username, password) {
		const payload = {
			username: username,
			password: password
		};

		// ${this.domain}/api/obtain/
		return axios.post('/api/obtain/', payload)
		.then(res => {
			// console.log(JSON.stringify(res))
			// console.log(res.data)
			// console.log('Response: ', res)
			console.log('TokenAccess: '+res.data.access)
			console.log('TokenRefresh: '+res.data.refresh)
			this.setToken(res.data.access, res.data.refresh) // Setting the token in localStorage
			return Promise.resolve(res)
		})
		.catch(err => {
			console.log('Error: ', err)
			console.log('Status: '+err.response.status)
			console.log('statusText: '+err.response.statusText)
			console.log('detail: '+err.response.data.detail)
			// return Promise.resolve(payload2)
			// return Error(err.response.statusText)

			var returnError = new Error(err.response.statusText)
			returnError.response = err.response
			throw returnError
		});
	}
	logout() {
		// Clear user token and profile data from localStorage
		localStorage.removeItem('id_access');
		localStorage.removeItem('id_refresh');
	}
	loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken() // Getting token from localstorage
		return !!token && !this.isAccessTokenExpired(token) // handwaiving here
	}
}
