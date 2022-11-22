import styled from "styled-components";

const Header = () => {
  return (
    <StyledNav>
      <div>
        <span>GDSC</span>
      </div>
      <div>
        <span>고민중</span>
      </div>
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
`;
