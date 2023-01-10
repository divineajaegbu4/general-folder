import React, { Fragment } from "react";
import styled from "styled-components";

function StylingAnyComponent() {
  const Link = ({ className, children }) => (
    <a className={className}>{children}</a>
  );

  const Div = ({ className, children }) => (
    <div className={className}>{children}</div>
  );

  const StyledDiv = styled.div`
    background: ${(props) => (props.backgroundShow ? "red" : "")};
    color: #fff;
  `;

  const DivContainer = styled.div`
    background: orange;
  `;

  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

  const StylingAnyComponentContainer = styled.div`
    background: orange;
  `;
  return (
    <Fragment>
      <h1>Styling Any Component</h1>
      <StylingAnyComponentContainer>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>

        <DivContainer>
          <Div>Abuja</Div>
          <Div>Lagos</Div>
          <Div>East</Div>
          <StyledDiv>Ogun State</StyledDiv>
          <StyledDiv backgroundShow>Ondo State</StyledDiv>
        </DivContainer>
      </StylingAnyComponentContainer>
    </Fragment>
  );
}

export default StylingAnyComponent;
