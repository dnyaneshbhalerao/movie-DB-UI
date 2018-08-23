import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import appReducer from './reducers/appReducer';

const store = createStore(appReducer); //optional parameter  window.STATE_FROM_SERVER

const rootNode = document.getElementById("react-root");

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootNode
);