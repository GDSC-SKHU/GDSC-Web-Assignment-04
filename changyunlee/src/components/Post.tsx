import styled from "styled-components";

interface Props {
  postImg: string;
  profileImg: string;
  user: string;
  date: string;
  postTitle: string;
}
const Post = ({ postImg, profileImg, user, date, postTitle }: Props) => {
  return (
    <>
      <StyledSection>
        <StyledTitle>{postTitle}</StyledTitle>
        <StyledDate>게시일: {date}</StyledDate>
        <StyledPostImage src={postImg} alt="postImg" />
        <StyledStatusCard>
          <StyledProfileRound>
            <StyledProfileImg src={profileImg} alt="profileImg" />
          </StyledProfileRound>
          <StyledP>{user}</StyledP>
        </StyledStatusCard>
        <StyledLine></StyledLine>
        
      </StyledSection>
    </>
  );
};
const StyledLine = styled.p`
  margin: 5px;
  padding: 0;
  width: 400px;
  border-top: 1px solid #aaa;
`;
const StyledTitle = styled.div`
  padding: 10px;
  color: rgba(0, 0, 0, 0.9);
`;

const StyledDate = styled.div`
  padding-left: 10px;
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
`;

const StyledPostImage = styled.img`
  width: 400px;
  height: 300px;
  padding: 5px;
  border-radius: 3px;
`;

const StyledStatusCard = styled.div`
  flex: 0 0 auto;
  width: 80px;
  max-width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
`;
const StyledProfileRound = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;
  background: linear-gradient(45deg, rgb(255, 230, 0), rgb(255, 0, 128) 80%);
`;
const StyledProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 0px solid #fff;
`;
const StyledP = styled.p`
  width: 100%;
  overflow: hidden;
  text-align: center;
  font-size: 15px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.5);
`;
const StyledSection = styled.section`
  border-radius: 3px;
  min-height: min-content;
  max-height: min-content;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export default Post;
