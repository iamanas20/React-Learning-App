import React from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";


export default class App extends React.Component {
  constructor() {
    super();
    this.duration = 2000;
    this.state = {
      in: false
    };
    setTimeout(() => {
      this.setState({
        in: true
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        in: false
      });
    }, 6000);
  }
  render() {
    return (
      <Transition in={this.state.in} timeout={this.duration}>
        {status => {
          return <h1>{status}</h1>;
        }}
      </Transition>
    );
  }
}