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
        <Header />

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/users' component={Users} />
        </BrowserRouter>

        <Footer id="footer" />
      </div>
    );
  }
}


export default App;