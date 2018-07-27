import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  } from 'react-router-dom';

// demo 1: basic router
// import App from './components/App_test0.jsx'

// demo2: nested router
import App from './components/App_test1.jsx';
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
    , document.getElementById('root')
);


