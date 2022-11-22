import styled from "styled-components";

import Section from "./Section";
import Comment from "./Comment";

const Main = () => {
  return (
    <StyledDiv>
      <Section />
      <Comment />
    </StyledDiv>
  );
};

export default Main;

const StyledDiv = styled.div`
  width: 100%;
  padding: 0 13.5rem;
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
