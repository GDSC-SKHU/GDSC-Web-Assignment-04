import styled from "styled-components";

import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <StyledDiv>
      <Header />
      <Main />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100vw;
  height: 150vh;
`;
