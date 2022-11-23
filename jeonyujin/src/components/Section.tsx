import styled from "styled-components";
import Post from "./Post";
import Comment from "./Comment";

function Section() {
  return (
    <>
      <StyledSection>
        <PostWrapper>
          <Post
            id={1}
            title="롤토체스"
            time="1시간전!!"
            imgSrc="/Lolchess.jpg"
          />
          <Comment/>
        </PostWrapper>
        <PostWrapper>
          <Post id={2} title="고양이" time="5시간전" imgSrc="/ChiChi.jpg" />
          <Comment/>
        </PostWrapper>
        
        <PostWrapper>
          <Post id={3} title="MBTI" time="13시간전" imgSrc="/MBTI.jpg" />
          <Comment/>
        </PostWrapper>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  width: 60%;
  height: 80%;
  padding: 0 50px;
  margin: 100px 0 0 300px;
  // 상우하좌 순
  display: flex;
  flex-direction: column;
  // 아이템 세로 정렬
  background: aliceblue;
  border: 1px solid white;
`;

const PostWrapper = styled.div`
  margin: 30px 0;
  border: 2px solid white;
`;

export default Section;
