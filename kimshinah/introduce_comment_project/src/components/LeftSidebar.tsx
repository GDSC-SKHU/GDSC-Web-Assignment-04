import styled from "styled-components";

const leftSidebar = () => {
  return (
    <div>
      <LeftSidebarCss className="section__img"></LeftSidebarCss>
    </div>
  );
};
export default leftSidebar;

const LeftSidebarCss = styled.div`
  width: 50em;
  height: 100vh;
`;
