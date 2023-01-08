import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotate = keyframes`
 from {
    transform: rotate(0deg);
 }

 to {
    transform: rotate(360deg);
 }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


function Animations() {
  return (
    <div>
      <h1>Animations</h1>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </div>
  );
}

export default Animations;
