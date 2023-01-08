import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
`;

const SecondInput = styled.input.attrs((props) => ({
  type: "email",
  size: props.showSize || "1em",
  defaultValue: "divineezinwanne@gmail.com",
}))`
  font-size: 3rem;
  color: white;
  background: crimson;
  cursor: pointer;
  border: 0;
  outline: 0;
  border: 0.1px inset crimson;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  border-radius: 10px;
`;

const PasswordInput = styled(SecondInput).attrs({type: "password"})`
 
border: 5px solid orange;
`



function AttachingAdditionalProps() {
  return (
    <div>
    <h1>Attaching Additional Props</h1>
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
      <br />
      <SecondInput  showSize="1rem" />
      <br/>
      <PasswordInput/>
    </div>
  );
}

export default AttachingAdditionalProps;
