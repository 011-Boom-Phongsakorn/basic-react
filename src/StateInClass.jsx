import React, { Component } from 'react'

export default class StateInClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '1',
            name: props.name,
            counter: 0
        }
    }

    inc = () => {
        this.setState({ counter: this.state.counter + 1})
    }

    dec = () => {
        this.setState({ counter: this.state.counter - 1})
    }

    render(){
        return (
          <div>
            {this.state.name}
            Counter = {this.state.counter}
            <button onClick={this.inc}>+</button>
            <button onClick={this.dec}>-</button>
          </div>
        );
    }
}