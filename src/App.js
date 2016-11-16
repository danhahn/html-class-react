import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <Layout>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </Layout>
        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
