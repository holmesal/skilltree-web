// This module bootstraps and exports the flux store
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
// Import the root reducer (which imports all subreducers)
import rootReducer from './reducers/index';

// Initializing with middleware
const createStoreWithMiddleware = applyMiddleware(
    // we're using redux-thunk for async actions
    thunk,
    // Create a logger to make it easy to debug state changes
    createLogger()
)(createStore);

// Create the store with an initial (empty) state
// In a complex application, we might rehydrate this state from AsyncStorage or etc
export default store = createStoreWithMiddleware(rootReducer, {});