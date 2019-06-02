import React, { Component } from 'react';
import logo from '../logo.svg';
import List from './list';
import './index.css';

class App extends Component {
    render() {
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

export default App;
