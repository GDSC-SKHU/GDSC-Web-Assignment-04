import styled from "styled-components";

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledA href='https://www.instagram.com/'>Instagram</StyledA>
                <p>좌우를 클릭해 보세요</p>
                <StyledA href='https://www.instagram.com/ji08l7/'>ji08l7</StyledA>
            </StyledUl>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledUl = styled.ul`
all: unset;
cursor: pointer;

display: flex;
justify-content: space-between;
align-items: center;
width: 23rem;
margin: 1rem 0;

color: #d47ba2;
`;

const StyledA = styled.a`
all: unset;

padding: 5px 10px;

background-color: pink;
border: 1px solid pink;
border-radius: 10px;
`;