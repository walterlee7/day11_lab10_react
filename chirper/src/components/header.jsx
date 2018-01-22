import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Input from './input';
import Comment from './comment';


class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Walt's Chirper</h1>
        </header>
        <Input user= {{name: 'Chirp Input Location'}}
        text= "Where Chirp Button Will Go!!!"/>
        <Comment user= {{name: 'Batman'}}
        text= "I am your worst nightmare!!!"/>
        <Comment user= {{name: 'Superman'}}
        text= "People are afraid of what they don't understand!!!"/>
        <Comment user= {{name: 'Wonder Woman'}}
        text= "What I do is not up to you!!!"/>
      </div>
    );
  }
}

export default Header;
