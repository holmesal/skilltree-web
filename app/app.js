// Entry point
import AppContainer from './containers/app';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
// base styles
import './styles/index.css';
// Render
ReactDOM.render(<AppContainer />, document.getElementById('app'));