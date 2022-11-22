import styled from "styled-components";

const rightSidebar = () => {
  return (
    <RightSidebarCss>
      <header>꺄앍</header>
      <section>
        <form>
          <input />
          <button>작성</button>
        </form>
      </section>
    </RightSidebarCss>
  );
};
export default rightSidebar;

const RightSidebarCss = styled.div`
  display: flex;
  flex-direction: column;
`;
