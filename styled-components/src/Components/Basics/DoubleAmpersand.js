import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Input = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const LabelText = styled.span`
  ${(props) => {
    switch (props.background) {
      case "dark":
        return `
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;

      default:
        return `
          background-color: white;
          color: black;
          ${Input}:checked+&& {
            color: red;
          }
        `;
    }
  }}
`;

const ButtonView = styled.button`
  border: 0;
  outline: 0;
  font-size: 4rem;
  color: white;
  cursor: pointer;

  &.something {
    background: orange;
  }

  &.nothing {
    background: yellow;
  }

  .buttonContainer & {
    font-weight: bolder;
  }

  ${(props) => {
    switch (props.background) {
      case "yellow":
        return `
             background: pink;
            `;

      default:
        return `
              background: red;
            `;
    }
  }}
`;

const Thing = styled.div`
  && {
    color: blue;
  }


`;

// const GlobalStyle = createGlobalStyle`
//   div${Thing}{
//     color: red;
//   }
// `;

function DoubleAmpersand() {
  const [clickBtn, setClickBtn] = useState(false);

  const clickHandler = () => {
    setClickBtn((prevSate) => !prevSate);
  };

  return (
    <Fragment>
      <div>
        <Label>
          <Input defaultChecked />
          <LabelText>Foos</LabelText>
        </Label>

        <Label>
          <Input />
          <LabelText background="dark">Foo</LabelText>
        </Label>
      </div>
      <div className="buttonContainer">
        <ButtonView
          onClick={clickHandler}
          className={`${clickBtn ? "something" : "nothing"}`}
        >
          Reflection
        </ButtonView>
        <ButtonView background="yellow">Accepted!</ButtonView>
      </div>

        <Thing className="experiment">
            Bekee is eating delicious rice!
        </Thing>
    </Fragment>
  );
}

export default DoubleAmpersand;
