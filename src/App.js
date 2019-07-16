import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
