import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/header';

ReactDOM.render(
    <HashRouter>
        <Header />
    </HashRouter>, document.getElementById('root'));

registerServiceWorker();
