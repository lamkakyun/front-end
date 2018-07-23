import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'initial data...'
        };

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(e) {
        this.setState({data: e.target.value})
    }

    render() {
        return (
            <div>
                <input type="text" value = {this.state.data} onChange = {this.updateInput}/>
                <h4>{this.state.data}</h4>

                <MyInput my_data_props={this.state.data} change_callback={this.updateInput} />
            </div>
        );
    }
}

class MyInput extends React.Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.my_data_props} onChange = {this.props.change_callback}/>
                <h3>{this.props.my_data_props}</h3>
            </div>
        );
    }
}

export default App;