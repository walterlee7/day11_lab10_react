import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import List from './list';


class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Walt's Chirper</h1>
                </header>
                <List />
            </div>
        );
    }
}

export default Header;
