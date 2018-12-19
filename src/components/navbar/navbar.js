import React, {Component, Fragment} from 'react';
import './navbar.css'
import Transition from 'react-transition-group';

export default class Moving extends Component {
    state = {
        my_array: [1, 2, 3],
        my_second_array: [4, 5, 6],
        blo: '',
    };
    render() {
        return <h1>
            {this.state.my_array.find(number => number > 2)}
          </h1>;
    };
}