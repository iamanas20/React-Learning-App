import React, {Component, Fragment} from 'react';
import './navbar.css'
import Transition from 'react-transition-group';

export default class Moving(props) {
    state = {
        bla: '',
        blo: '',
    }
    render{
        return(
            <h1 {...this.state}>Hello World</h1>
        );
    }
}