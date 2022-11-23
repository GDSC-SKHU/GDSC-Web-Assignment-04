import styled from "styled-components";
import Image from "next/image";
import namsan from "../../public/img/namsan.jpg";

const leftSidebar = () => {
  return (
    <div>
      <LeftSidebarCss className="section__img">
        <Image src={namsan} alt="namsan" />
      </LeftSidebarCss>
    </div>
  );
};
export default leftSidebar;

const LeftSidebarCss = styled.div`
  width: 50em;
  height: 100vh;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
