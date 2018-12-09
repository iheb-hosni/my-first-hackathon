import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from "../src/components/Footer/Footer"
import './App.css';
import Home from "./components/Home/Home"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Footer />
      </div>
    );
  }
}

export default App;
