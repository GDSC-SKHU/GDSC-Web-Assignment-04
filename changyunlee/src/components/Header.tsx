import styled from "styled-components";
import Image from "next/image";
const Header = () => {
  const imgUrl = "../img/gyunsgram.png";
  return (
    <>
      <Hdiv>
        <Image src="/gyuns.png" alt="some" width={225} height={60} />
      </Hdiv>
    </>
  );
};

const Hdiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Header;
