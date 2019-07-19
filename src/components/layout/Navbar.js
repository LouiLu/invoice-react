import React, { Component } from 'react';
import classnames from 'classnames';

import { withRouter } from 'react-router';
import AuthService from '../service/AuthService';
const Auth = new AuthService();

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      sideBarActive: false
    };
  }

  onClickStyle = () => {
    const current = this.state.sideBarActive;
    this.setState({ sideBarActive: !current });
  };

  onClickLogout = () => {
    console.log('Navbar onClickLogout')
    Auth.logout()
    this.props.history.replace('/login')
  }

  render() {
    return (
      <div id="navbar">
        <nav
          id="sidebar"
          className={classnames('b-shadow-2', {
            'sb-active': this.state.sideBarActive
          })}
        >
          <div className="sidebar-header">
            <div className="nav-logo mx-auto my-3" />
            <h3>ComNet Invoice</h3>
            <strong>CI</strong>
          </div>

          <ul className="list-unstyled components">
            <li className="active">
              <a href="/dashboard" className="mobile-icon">
                <i className="fas fa-home" />
              </a>
              <a href="/dashboard">
                <i className="fas fa-home" /> Dashboard
              </a>
            </li>
            <li>
              <a href="/about" className="mobile-icon">
                <i className="fas fa-info" />
              </a>
              <a href="/about">
                <i className="fas fa-info" /> About
              </a>
            </li>
            <li>
              <a href="/" className="mobile-icon">
                <i className="fas fa-file-invoice-dollar" />
              </a>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                <i className="fas fa-file-invoice-dollar" /> Invoices
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="/addInvoicePreStep">Add Invoice</a>
                </li>
                <li>
                  <a href="/myInvoice">My Invoices</a>
                </li>
              </ul>
            </li>
          </ul>
          <div id="sidebarLogout" className="text-center">
            <button type="button" className="form-submit" onClick={this.onClickLogout}>Logout</button>
          </div>
          <div
            id="sidebarCollapse"
            className="text-center"
            onClick={this.onClickStyle}
          />
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
