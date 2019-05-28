import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
import ContactPage from './containers/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/contact" component={ContactPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
