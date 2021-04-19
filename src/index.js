//External imports
import React from 'react';
import {render} from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

//Local imports
import App from './App';
import rootReducer from './slices';

//Assets
import './index.css';

//configure redux store
const store = configureStore({reducer: rootReducer});

//provide store to the app
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);