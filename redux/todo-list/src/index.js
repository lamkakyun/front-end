import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// these are some action
let todo_id = 1;
const add_todo_action_generator = text => ({
    type: 'ADD_TODO',
    id: ++todo_id,
    text: text
});

const toggle_todo_action_generator = id => ({
    type: 'TOGGLE_TODO',
    id: id,
})

const todo_filter_actions = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_DONE: 'SHOW_DONE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};


class App extends React.Component {
    render() {
        const { todo_list, add_task_callback } = this.props;
        // console.log(todo_list, add_task_callback);
        return (
            <div>
            <h1>hello world every body!!</h1>
            <TodoAddForm onAdd= {add_task_callback}/>
            <TodoList todo_list={todo_list} />
            <Link value='show all'></Link>
            <Link value='show active'></Link>
            <Link value='show done'></Link>
            </div>
        );
    };
}

class TodoAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        // we need a reference of todo input
        this.input_ref = React.createRef();
    }

    addTodo(e) {
        e.preventDefault();
        const new_todo = this.input_ref.current.value.trim();
        if (new_todo == '') return;
        this.input_ref.current.value = '';
        this.props.onAdd(new_todo);
    }

    render() {
        return (
            <div>
            <form onSubmit={this.addTodo}>
            <input type="text" ref={this.input_ref} />
            <button type="submit">add todo</button>
            </form>
            </div>
        );
    }
}

// todolist is a container
class TodoList extends React.Component {
    render() {

        const todo_list = this.props.todo_list;
        return (
            <ul>
            {todo_list.map(todo =>
                <TodoItem key={todo.id} todo={todo} />
            )}
            </ul>
        );
    };
}

// todo item is a ui component
class TodoItem extends React.Component {
    render() {
        const todo = this.props.todo;
        return (
            <li>{todo.text}</li>
        );
    };
}

class Link extends React.Component {
    render() {
        return (
            <button>{this.props.value}</button>
        )
    }
}

function mapStateToProps(state) {
    return {
        todo_list: state.todo_list
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        add_task_callback: (text) => dispatch(add_todo_action_generator(text))
    }
}



// this is a reducers
const reducers = (state = {todo_list: []}, action) => {
    switch(action.type)
    {
        case 'ADD_TODO':
            let new_todo_list = [...state.todo_list, {
                id: action.id,
                text: action.text,
                status: 'active'
            }]
            return {todo_list: new_todo_list};

        default:
            return state;
    }
};

const MyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

// redux in a word is date object try to update theirselves.
let init_todos_state = {
    todo_list: [
        {
            id: 0,
            text: 'learn swimming',
            status: 'active', // optional status: active, done
        },
        {
            id: 1,
            text: 'learn fucking redux',
            status: 'active', // optional status: active, done
        }
    ],
    visible_filter: todo_filter_actions.SHOW_ALL
};

let store = createStore(reducers, init_todos_state);

const render = () => ReactDom.render(
    <Provider store={store}>
    <MyContainer />
    </Provider>
    ,document.getElementById('root')
);

render();


