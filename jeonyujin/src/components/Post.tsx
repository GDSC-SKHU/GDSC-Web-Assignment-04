
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
        <StyledSpan>#{id}</StyledSpan>
        <StyledH2>{title}</StyledH2>
        <StyledH3>{time}</StyledH3>
        <StyledImgWrapper>
          <StyledImg src={imgSrc} alt={title} />
        </StyledImgWrapper>
      </StyledDiv>
    </>
  );
};

export default Post;

const StyledDiv = styled.div`

`;

const StyledH2 = styled.h2``;

const StyledH3 = styled.h3``;

const StyledImgWrapper = styled.div``;

const StyledImg = styled.img``;

const StyledSpan = styled.span``;
