import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler() {
        var item = 'setState...';
        var myArr = this.state.data.slice();
        myArr.push(item);
        this.setState({data: myArr}); // call react api
    }

    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data}</h4>
                <MyButton />
                <MyButton2 />
            </div>
        );
    }
}

class MyButton extends React.Component {

    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler() {
        this.forceUpdate(); // call react api
    }

    render() {
        return (
            <button onClick = {this.forceUpdateHandler}>ramdom number: {Math.random()}</button>
        );
    }
}

class MyButton2 extends React.Component {
    constructor() {
        super();
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    }

    findDomNodeHandler() {
        var myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    }

    render() {
        return (
            <div>
                <button onClick = {this.findDomNodeHandler}>find dom node</button>
                <div id="myDiv">Node</div>
            </div>
        );
    }
}

export default App;