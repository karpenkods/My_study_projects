import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Router} from "react-router-dom";
import {Provider} from 'react-redux';
import './index.scss'
import App from "./App";
import {store} from './configureStore'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
