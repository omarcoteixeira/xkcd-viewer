import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/index.css';

import App from './App';
import registerServiceWorker from './sw';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
