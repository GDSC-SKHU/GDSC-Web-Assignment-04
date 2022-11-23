import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import Post from "../components/Post";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Post
        postImg="/jjd.jpg"
        user="이찬균"
        profileImg="/prof.jpg"
        date="2022년 11월 22일"
        postTitle="고양이"
      />
      <Post
        postImg="/royattoyafood.jpg"
        user="Roya_ttoya"
        profileImg="/royattoya.jpg"
        date="2022년 11월 16일"
        postTitle="로야토야 연남점"
      />
      <Post
        postImg="/spiderman.jpg"
        user="Tom"
        profileImg="/tom.png"
        date="2022년 11월 13일"
        postTitle="Coming Soon!!"
      />
    </div>
  );
}

const StyledSection = styled.section``;
const StyledH1 = styled.h1`
  color: #2c1e11;
  font-weight: bold;
`;

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
