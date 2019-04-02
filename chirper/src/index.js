import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/header';

ReactDOM.render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
