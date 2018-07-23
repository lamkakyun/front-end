import React from 'react';
import ReactDOM from 'react-dom';

// test: this is a hello-world
// import App from './App_test0.jsx';
// ReactDOM.render(<App headerProp = "Header from props..." contentProp = "Content from props..." />, document.getElementById('app'));

// test: 拥有 props 的组件
// import App from './App_test1.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));

// test: Props Validation
// import App from './App_test2.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));

// test: ReactJS - Component API
// import App from './App_test3.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));

// test: ReactJS - Component Life Cycle
// import App from './App_test4.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));
// setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);

// test: ReactJS - Forms
// import App from './App_test5.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));

// test: ReactJS - Refs
// import App from './App_test6.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));

// test: ReactJS - Router
// import App from './App_test7.jsx';
// ReactDOM.render(<App />, document.getElementById('app'));

// test: hot loader
import App from './App_test8.jsx';
ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()
}