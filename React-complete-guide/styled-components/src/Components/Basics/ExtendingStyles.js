import React, { Fragment } from "react";
import styled from "styled-components";

function ExtendingStyles() {
  const Button = styled.button`
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
  `;

  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

  const Paragraph = styled.p`
    color: pink;
    cursor: pointer;
    font-size: 2rem;
  `;

  const SelectionP = styled(Paragraph)`
    background: ${(props) => (props.background ? "yellow" : "blue")};
    color: ${(props) => (props.color ? "white" : "red")};
  `;

  const Section = styled.section`
    background: purple;
  `;

  const Links = styled.div`
    background: whitesmoke;
  `;

  const CustomComponents = styled.div`
    background: blue;
  `;

  const ReversedButton = (props) => (
    <Button {...props} children={props.children.split("").reverse()} />
  );

  const NonReversedButton = (props) => (
    <Button {...props} children={props.children.split("").join("-")} />
  );

  return (
    <Fragment>
      <h1>Extending Styles</h1>

      <Section>
        <div>
          <Button>Normal Button</Button>
          <TomatoButton>Tomato Button</TomatoButton>
          <Paragraph>Divine</Paragraph>
          <Paragraph>Bekee</Paragraph>
          <SelectionP background>Hello</SelectionP>
          <SelectionP color>Hey</SelectionP>
        </div>

        <Links>
          <TomatoButton as="a" href="#">
            Link with Tomato Button
          </TomatoButton>
          <TomatoButton>
            <a href="#">Link with Delicious Tomato Button</a>
          </TomatoButton>
          <Button as="a" href="#">
            Link with Button Styles
          </Button>
        </Links>

        <CustomComponents>
          <Button as={ReversedButton}>
            Custom Button with Normal Button styles
          </Button>
          <Button as={NonReversedButton}>Abike is an arrogant person</Button>
        </CustomComponents>
      </Section>
    </Fragment>
  );
}

export default ExtendingStyles;
