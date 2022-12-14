import styled from "styled-components";
import React from "react";
import { Link } from "react-scroll";

const Sidebar = () => {
  return (
    <StyledContainer>
      <Link to="1" spy={true} smooth={true}>
        <StyledDiv>1. π π κ³ μμ΄</StyledDiv>
      </Link>

      <Link to="2" spy={true} smooth={true}>
        <StyledDiv>2. π κ°μμ§</StyledDiv>
      </Link>
      <Link to="3" spy={true} smooth={true}>
        <StyledDiv>3. π π π λ§μΉλ©°...</StyledDiv>
      </Link>
    </StyledContainer>
  );
};

export default Sidebar;

const StyledContainer = styled.div`
  position: fixed;
  right: 10%;
  top: 30%;
  padding-left: 0.75rem;
  border-left: 0.5px solid rgba(255, 255, 255, 0.5);
`;
const StyledDiv = styled.div`
  padding: 1rem 0;
  opacity: 0.75;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
