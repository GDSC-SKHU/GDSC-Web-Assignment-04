import styled from "styled-components";
import Content from "./Content";

interface IBlog {
  id: number;
  title: string;
  nickname: string;
}

const blog: IBlog[] = [
  {
    id: 0,
    nickname: "GDSC WEB - 노욱진",
    title: "저희집 아들, 딸 보고 가세요 🐈 🐕 ",
  },
];

const Section = () => {
  return (
    <StyledContainer>
      {blog.map((list) => (
        <div key={list.id}>
          <StyledTitle>{list.title}</StyledTitle>
          <StyledInfo>
            <span>{list.nickname}</span>
          </StyledInfo>
        </div>
      ))}
      <Content />
    </StyledContainer>
  );
};

export default Section;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10rem;
  width: 75%;
`;
const StyledTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;
const StyledInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
`;
