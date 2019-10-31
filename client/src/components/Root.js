import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

export default ({ children }) => {

    return(
        <Provider store={store}>
            { children }
        </Provider>
    );
};