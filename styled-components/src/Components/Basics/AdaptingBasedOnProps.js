import React, { useState } from "react";
import styled from "styled-components";

function AdaptingBasedOnProps() {
  const [clickBtn, setClickBtn] = useState(false);
  const Button = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;

  const ButtonClass = styled.button`
    background: ${clickBtn ? "crimson" : "brown"};
    cursor: pointer;
    border: 0;
  `;

  const Header = styled.h1`
  color: black;
  `

  const SplitItem = (props) => (
    <Header {...props} children={props.children.split("")} />
  );
  

  const clickHandler = () => {
    setClickBtn((prevState) => !prevState);
  };
  return (
    <div>
      <Header as={SplitItem}>Adapting BasedOn Props</Header>
      <ButtonClass onClick={clickHandler}>Normal</ButtonClass>
      <Button primary>Primary</Button>
    </div>
  );
}

export default AdaptingBasedOnProps;
