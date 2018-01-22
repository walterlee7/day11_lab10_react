import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/header';

ReactDOM.render(<Header/>, document.getElementById('root'));

registerServiceWorker();
