import React, { Component } from 'react';
import logo from '../logo.svg';
import List from './list';


class Header extends Component {
    render() {
        console.log("This is the process.env", process.env.PUBLIC_URL);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Chirper for chirping...</h1>
                </header>
                <List />
            </div>
        );
    }
}

export default Header;
