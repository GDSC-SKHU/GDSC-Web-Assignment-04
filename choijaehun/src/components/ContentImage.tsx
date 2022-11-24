import Image from "next/image";
import styled from "styled-components";
import React from "react";

interface Props {
  width?: string;
  height?: string;
  src?: string;
  alt?: string;
  radius?: string;
  margin?: string;
  name?: string;
}

const ContentImage = ({
  width = "400px",
  height = "400px",
  src = "/piki1.png",
  alt=""
}: Props) => {
  return (
    <>
      <Image width={400} height={400} src={src} alt={""} />
      </>
  );
};


export default ContentImage;
