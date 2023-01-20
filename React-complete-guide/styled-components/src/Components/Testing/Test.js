import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContainerDiv = styled.div`
  display: grid;
  margin-top: -50px;
`;

const UnOrderedListContainer = styled.ul`
  display: flex;
  width: 300px;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItems = styled.li`
  padding: 0.5rem 1rem;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.backgroundSelect || "crimson"};
    transition: background 0.5s ease-in-out;
    ${(props) => {
      switch (props.viewStyles) {
        case "style":
          return `
         transform: scale(1.2, 1.3);
         color: white;
        `;
        default:
          return `
          transform: scale(2, 2);
          color: whitesmoke;
          `;
      }
    }}
  }
`;

function Test(props) {
  const a = 2;
  const b = 4;
  return (
    <Fragment>
      <ContainerDiv>
        <UnOrderedListContainer>
          <ListItems viewStyles="style">{props.name1}</ListItems>
          <ListItems backgroundSelect="orange">{props.name2}</ListItems>
          <ListItems backgroundSelect="blue">{props.fruit}</ListItems>
        </UnOrderedListContainer>

        <h1 data-testid="mytestid">Hello, world</h1>
        <span title="sum">{a+b}</span>
      </ContainerDiv>
    </Fragment>
  );
}

Test.defaultProps = {
  name1: "Divine",
  name2: "Happiness",
  fruit: "Mangoes",
};

Test.propTypes = {
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string.isRequired,
  fruit: PropTypes.string.isRequired,
};

export default Test;
