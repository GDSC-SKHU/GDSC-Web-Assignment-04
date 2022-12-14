import styled from "styled-components";
import Image from "next/image";
import jlogo from "../../public/img/jlogo.jpg";
import profile from "../../public/img/profile.jpg";

function Nav() {
  return (
    <StyledNav>
      <Image src={jlogo} alt="내 로고" width={50} height={50} />
      <StyledSpan>전유진의 블로그</StyledSpan>

      <StyledImageWrapper>
        <Image src={profile} alt="내 프로필" width={50} height={50} />
      </StyledImageWrapper>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: aliceblue;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const StyledSpan = styled.span`
  font-weight: bold;
  font-size: 1.5em;
  position: relative;
  bottom: 12px;
  left: 15px;
`;

const StyledImageWrapper = styled.div`
  border: 2px solid white;
  float: right;
`;

export default Nav;
