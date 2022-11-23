import Post from "../components/Post";
import styled from "styled-components";
import Image from "next/image";

function Nav() {
  return (
    <StyledNav>
      <StyledImageWrapper>
        <StyledImage src="" alt="내 로고" />
      </StyledImageWrapper>
      <h1>전유진의 블로그</h1>
      <Image src="" alt="내 프로필" />
    </StyledNav>
  );
}

function Blog() {
  return (
    <>
      <Nav />
      <StyledHeader>
        <StyledSection>
          <StyledArticle>
            <Post id={1} title="롤토체스" time="1시간전!!" imgSrc="z" />
            <Post id={2} title="고양이" time="5시간전" imgSrc="z" />
            <Post id={3} title="MBTI" time="13시간전" imgSrc="z" />
            <Post id={4} title="Dev festival" time="18시간전" imgSrc="z" />
          </StyledArticle>
        </StyledSection>
      </StyledHeader>
    </>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: aliceblue;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

const StyledImageWrapper = styled.div`
  height: 22px;
  position: relative;
`;

const StyledImage = styled.image`
  height: 100%;
  cursor: pointer;
  margin: 0 10px;
  display: inline-block;
`;

const StyledHeader = styled.header`
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: 150px;
`;

const StyledSection = styled.section`
  width: 80%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
`;

const StyledArticle = styled.article`
  width: 100%;
  height: 600px;
  background: aliceblue;
  border: 1px solid white;
  margin-top: 40px;
  align-items: center;
`;

export default Blog;
