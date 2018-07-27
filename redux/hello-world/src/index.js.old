import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App.jsx';
import Countor from './components/Countor';
import counterReducer from './reducers';

let store = createStore(counterReducer);

const render = () => ReactDOM.render(
    <Countor
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT'  })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT'  })}
      />,
    document.getElementById('app'));

render();
store.subscribe(render);
