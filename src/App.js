import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
