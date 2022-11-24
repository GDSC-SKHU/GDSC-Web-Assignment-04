import Image from "next/image";
import styled from "styled-components";
import React from "react";
import { useState } from "react";

interface Props {
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
  radius?: string;
  margin?: string;
  name?: string;
}

const CommentProfile = ({
  width = "30px",
  height = "30px",
  src = "/piki1.png",
  alt,
  radius = "50%",
  margin = "40px",
  name = "팔로우하기"
}: Props) => {
  return (
    <ImgWrapper margin={margin} radius={radius}>
      <Image width={40} height={40} src={src} alt={""} />
    </ImgWrapper>
  );
};

interface wrapperProps {
  margin?: string;
  radius?: string;
}

const ImgWrapper = styled.span<wrapperProps>`
  align-items: center;
  img {
    border-radius: ${(props) => props.radius};
  }
`;

const StyledP = styled.p`
  margin-left: 10px;
`;

export default CommentProfile;
