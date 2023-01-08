import React, { Component, Fragment } from "react";
import styled from "styled-components";
import styles from "./styles.css";

const CounterContainer = styled.div`
  background-color: darkgoldenrod;
`;

const Paragraph = styled.p`
  color: white;
  background-color: dodgerblue;
  font-size: 3rem;
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  background-color: orange;
  color: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  margin-left: 20px;
`;

class ComingFromCss extends Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <Fragment>
        <h1>Coming From CSS</h1>
        <CounterContainer>
          <Paragraph>{this.state.count}</Paragraph>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
        </CounterContainer>
      </Fragment>
    );
  }
}

export default ComingFromCss;
