import * as serviceWorker from './serviceWorker';
import store from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

// Создаём RerenderDOMTree
let RerenderDOMTree = (state) => {
    ReactDOM.render(
        <BrowserRouter basename={ process.env.PUBLIC_URL}>
          <React.StrictMode>
            <App state={state}/>
          </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
};

// Вызов с передачей State
RerenderDOMTree(store.getState());

// ...
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();