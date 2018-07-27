import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>hello world every body!!</h1>
            </div>
        );
    };
}

class TodoAddForm extends React.Component {
    render() {

    }
}

// todolist is a container
class TodoList extends React.Component {
    render() {
        const {todo_list, add_task_callback, finish_task_callback} = this.props;
    };
}

// todo item is a ui component
class TodoItem extends React.Component {
    render() {

    };
}

// these are some action
let todo_id = 1;
const add_todo_action = text => ({
    type: 'ADD',
    id: todo_id++,
    text: text
})

// this is a reducers
const reducers = (state = {todo_list: []}, action) => {
    
};

// redux in a word is date object try to update theirselves.
let init_todos_state = {todos_list: [
    {
        id: 1,
        text: 'learn fucking redux',
        status: 'active', // optional status: active, done
    }
]};
let store = createStore(reducers, init_todos_state);

const render = () => ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);

render();

