import styled from "styled-components";

interface Props {
  // 게시글 제목, 작성자
  id: number;
  title: string;
  time: string;
  imgSrc: string;
}

const Post = ({ id, title, time, imgSrc }: Props) => {
  return (
    <>
      <StyledDiv>
        <span>#{id}</span>&nbsp;
        <StyledSpan>{title}</StyledSpan>
        <h5>{time}</h5>
        <StyledImgWrapper>
          <StyledImg src={imgSrc} alt={title} />
        </StyledImgWrapper>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  margin-top: 10px;
`;

const StyledImgWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const StyledSpan = styled.span`
  font-weight: bold;
  font-size: large;
`;

export default Post;
