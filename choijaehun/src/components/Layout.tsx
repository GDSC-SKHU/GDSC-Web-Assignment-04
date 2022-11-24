import styled from "styled-components";
import ContentImage from "./contentImage";
import Like from "./Like";
import ProfileImage from "./ProfileImage";
import Comment from "./Comment";

interface ILayout {
  name: string;
  content: string;
}

const Layout = ({ name, content }: ILayout) => {
  return (
    <StyledContainer>
      <ProfileImage />
      <StyledDiv>
      <StyledImgBox>
        <ContentImage />
        <StyledH2>I'm Sleeping</StyledH2>
      </StyledImgBox>
      <Like />
      <Comment />
      {/* <div>
        <p>{name}{content}</p>
        <h3>{content}</h3>
      </div> */}
      </StyledDiv>
      {/* <p>{name}</p>
      <p>{content}</p> */}
    </StyledContainer>
  );
};

export default Layout;

const StyledContainer = styled.div`
  width: 600px;
  height: auto;
  border: 3px solid #cccccc;
  margin: 0 auto;
  position: relative;
  top: 100px;
`;

const StyledImgBox = styled.div`
  width: 400px;
  height: 450px;
  border: 2px solid #cccccc;
  margin: 0 auto;
  position: relative;
`

const StyledH2 = styled.h2`
  text-align: center;
`

const StyledDiv = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100%;
  margin: 0 auto;
`

// const StyledHr = styled.hr`
// width: 100%;
// border: 1px solid #ccc;
// margin-top: 24px;
// `