import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import './assets/stylesheets/index.css';

import reducers from './app/reducers';
import App from './App';
import registerServiceWorker from './sw';

const store = createStore(
    reducers, 
    {},
    applyMiddleware(ReduxThunk)
);

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
