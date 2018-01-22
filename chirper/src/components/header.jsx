import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Comment from './comment';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Walt's Chirper</h1>
        </header>
        <Comment user= {{name: 'Walter Lee'}}
        text= "Coding is awesome!!!"/>
      </div>
    );
  }
}

export default Header;
