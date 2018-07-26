import React from 'react';
import PropTypes from 'prop-types'

class Countor extends React.Component {
    constructor(props) {
        super(props);
        this.incAsync = this.incAsync.bind(this);
        this.incIfOdd= this.incIfOdd.bind(this);
    }
    
    incIfOdd() {
        if (this.props.value % 2 !== 0) this.props.onIncrement();
    }

    incAsync() {
        setTimeout(this.props.onIncrement, 2000);
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props; // deconstruct array or object
        return (
            <p>
                count: {value} 
                <button onClick={onIncrement}> + </button>
                <button onClick={onDecrement}> - </button>
                <button onClick={this.incIfOdd}>increment if odd</button>
                <button onClick={this.incAsync}>increment async </button>
            </p>
        );
    }
}

export default Countor;
