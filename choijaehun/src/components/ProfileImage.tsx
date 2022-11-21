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
}

const ProfileImage = ({
  width = "30px",
  height = "30px",
  src = "/piki1.png",
  alt,
  radius = "50%",
  margin = "40px",
}: Props) => {
  return (
    <ImgWrapper margin={margin} radius={radius}>
      <Image width={40} height={40} src={src} alt={""} />
      <StyledP>Piki</StyledP>
    </ImgWrapper>
  );
};

interface wrapperProps {
  margin?: string;
  radius?: string;
}

const ImgWrapper = styled.div<wrapperProps>`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin};
  img {
    border-radius: ${(props) => props.radius};
  }
`;

const StyledP = styled.p`
  margin-left: 10px;
`;

// function ProfileImage() {
//   return (
//     <>
//       <StyledProfileBox>
//         <Image src="/piki1.png" alt="Piki" layout="fill" />
//       </StyledProfileBox>
//     </>
//   );
// }

// const StyledProfileBox = styled.div`
//   width: 50px;
//   height: 50px;
//   border: 2px solid black;
//   position: relative;
//   border-radius: 50%; ;
// `;

// const StyledProfileImg = styled.span`
//   border-radius: 50%;
// `;

export default ProfileImage;
