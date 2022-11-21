import styled from "styled-components";
import ProfileImage from "./ProfileImage";

interface ILayout {
  name: string;
  content: string;
}

const Layout = ({ name, content }: ILayout) => {
  return (
    <StyledContainer>
      <ProfileImage />
      {/* <p>{name}</p>
      <p>{content}</p> */}
    </StyledContainer>
  );
};

export default Layout;

const StyledContainer = styled.div`
  width: 600px;
  height: 800px;
  border: 3px solid #cccccc;
  margin: 0 auto;
  position: relative;
  top: 100px;
`;
