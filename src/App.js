import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

// layout components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

class App extends Component {
  render() {
    return (
      <Router basename={'/castrol'}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
