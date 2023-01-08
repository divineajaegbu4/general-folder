import React from "react";
import styled from "styled-components";

const Thing = styled.div.attrs((props) => ({ tabIndex: 0 }))`
  color: blue;
  cursor: pointer;
  &:hover {
    color: red;
  }

  & ~ & {
    background: tomato;
  }
  & + & {
    background: lime;
  }

  &.something {
    background: orange;
  }

  .something-else & {
    border: 5px solid  red;
  }
`;
function PseudoelementsSelectorsNesting() {
  return <div>
    <Thing>Divine</Thing>
    <Thing>Happiness</Thing>
    <Thing className="something">Developer</Thing>
    <div>Pretty nice day today.</div>
    <Thing>Be careful the way you think</Thing>
    <div className="something-else">
        <Thing>Splendid.</Thing>
    </div>
  </div>;
}

export default PseudoelementsSelectorsNesting;
