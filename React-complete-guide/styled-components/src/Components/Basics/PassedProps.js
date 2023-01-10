import React from "react";
import styled from "styled-components";

function PassedProps() {
  const Input = styled.input`
    background: ${(props) => props.inputBackground || "crimson"};
    color: #fff;
  `;

  return (
    <div>
        <h1>Passed Props</h1>
      <Input inputBackground="pink" defaultValue="Divine"></Input>
      <Input defaultValue="Happiness"></Input>
    </div>
  );
}

export default PassedProps;
