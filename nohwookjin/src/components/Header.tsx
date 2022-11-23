import styled from "styled-components";
import Image from "next/image";
import gdsc from "../../public/images/gdsc2.png";

const Header = () => {
  return (
    <StyledNav>
      <StyledDiv>
        <Image src={gdsc} alt="profile" width={40} height={25} />
        <StyledSpan>GDSC - WEB</StyledSpan>
      </StyledDiv>
    </StyledNav>
  );
};

export default Header;

const StyledNav = styled.nav`
  width: 100%;
  height: 7.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1.5rem 13.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 5rem;
  background-color: #171717;
  position: fixed;
  z-index: 999;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;
const StyledSpan = styled.span`
  margin-left: 1rem;
`;
