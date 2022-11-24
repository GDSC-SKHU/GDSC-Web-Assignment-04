import styled from "styled-components";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const mainModal = () => {
  return (
    <div>
      <MainModalCss>
        <LeftSidebar />
        <RightSidebar />
      </MainModalCss>
    </div>
  );
};
export default mainModal;

const MainModalCss = styled.section`
  display: flex;
`;
