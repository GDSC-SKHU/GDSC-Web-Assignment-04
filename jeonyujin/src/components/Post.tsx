import { useState } from "react";
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
        <StyledH5>{time}</StyledH5>
        <StyledImgWrapper>
          <StyledImg src={imgSrc} alt={title} />
        </StyledImgWrapper>
      </StyledDiv>
    </>
  );
};

export default Post;

const StyledDiv = styled.div`
    margin-top: 10px;
`;

const StyledH5 = styled.h5``;

const StyledImgWrapper = styled.div`
  border: 2px solid white;
`;

const StyledImg = styled.img`
  max-width: 100%;
  height: 80%;
`;

const StyledSpan = styled.span`
  font-weight: bold;
  font-size: large;
`;
