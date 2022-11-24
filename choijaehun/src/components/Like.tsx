import Image from "next/image";
import styled from "styled-components";
import React from "react";

interface Props {
  width?: string;
  height?: string;
  src?: string;
  chatSrc?: string;
  alt?: string;
  name?: string;
  margin?: string;
}

const Like = ({
  width = "40px",
  height = "40px",
  src = "/heart.png",
  chatSrc = "/chat.png",
  alt = "",
  margin = "50px",
}: Props) => {
  return (
    <>
      <ImgWrapper margin={margin}>
        <Image width={30} height={30} src={src} alt={""} />
        <Image width={36} height={36} src={chatSrc} alt={""} />
      </ImgWrapper>
    </>
  );
};

interface wrapperProps {
  margin?: string;
}

const ImgWrapper = styled.div<wrapperProps>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-right: 20px;
  gap: 10px;
  cursor: pointer;
`;

export default Like;
