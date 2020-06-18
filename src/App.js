import React, { Component } from 'react';

import Footer from './Footer';
import Home from './Home';
import { Login } from './Login';
import Register from './Register';
import Header from './Header';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {

    return (
      <div>
        <Header />

        <BrowserRouter>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </BrowserRouter>

        <Footer id="footer" />
      </div>
    );
  }
}


export default App;