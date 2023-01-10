import React from "react";
import styled from "styled-components";

function StyleH1() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  const Body = styled.p`
    display: flex;
    width: 40rem;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background: crimson;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        transform: scale(1.2, 1.2);
    }
  `;

 

  return (
    <div>
      <h1>Getting Started</h1>
      <Wrapper>
        <Title>Hello World!</Title>
        <Body>Divine is heading towards her office right now!</Body>
      </Wrapper>
    </div>
  );
}

export default StyleH1;
