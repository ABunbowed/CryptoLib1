import React from "react";
import { render } from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";
import App from "./App.js";

const rootElement = document.getElementById('root')
render(
    <Router>
            <Provider store={store}>
            <App />
            </Provider>
    </Router>
, 
document.getElementById('root')
);
