import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { createStore  } from 'redux';
import { Provider  } from 'react-redux';

// this is a reducers
const reducers = (state = {count: 0}, action) =>
{
    const count = state.count;
    switch(action.type)
    {
        case 'INC':
            return {count: count + 1};
        default:
            return state;
    }
}

// this is a component
class Counter extends React.Component {
    render() {
        const {value, onInc} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onInc}>increase</button>
            </div>
        );
    }
}

// action creator
const incAction = {type: 'INC'};

// react-redux api needed 2 functions
function mapStateToProps(state) {
	return {value: state.count};
}

// dispatch call reducer internally, i think dispatch wrotten like this:
/*
function dispatch(action) 
{
    global state
    state = reducer(state, action)
}
*/
function mapDispatchToProps(dispatch) {
    return {
        onInc: () => {
            dispatch(incAction);
        }
    }
}

// this is a container
const App = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Counter);

let store = createStore(reducers);;

const render = () => ReactDOM.render(
    <div>
        <h1>hello, jet</h1>
        <Provider store = {store} >
            <App /> 
        </Provider>
    </div>
, document.getElementById('app'));

render();

// redux in one word: store like to update itself.