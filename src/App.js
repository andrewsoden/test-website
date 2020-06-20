import React, { Component } from 'react';

import Footer from './Footer';
import Home from './Home';
import Users from './Users';
import Register from './Register';
import Header from './Header';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <BrowserRouter basename="/">
          <Header />

          <Route exact path="/test-website" component={Home} />
          <Route path="/test-website/register" component={Register} />
          <Route path="/test-website/users" component={Users} />
        </BrowserRouter>

        <Footer id="footer" />
      </div>
    );
  }
}


export default App;