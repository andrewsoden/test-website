import React, { Component } from 'react';

import Footer from './Footer';
import Home from './Home';
import Users from './Users';
import About from './About';
import Header from './Header';

import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {    
  render() {

  return(
    <div>
      <Header />

      <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
      </BrowserRouter>

      <Footer />
    </div>
    );
  }
}


export default App;