import styled from "styled-components";
import Comment from "./Comment";

export default function Post() {
    return (
        <ContainerDiv2>
            <ContainerDiv>
                <ContainerName>
                    <ProfileImg src="/profile.jpg" />
                    <StyledFont>ji08l7</StyledFont>
                </ContainerName>
                <PostImg src="/snow.jpg" />
                <LikeImg src="/like.png" />
                <StyledP>#가양역</StyledP>
                <StyledP>#눈오는 날</StyledP>
                <Comment />
            </ContainerDiv>
        </ContainerDiv2>
    )
};

const ContainerDiv2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ContainerDiv = styled.div`
padding: 1rem 0;
width: 23rem;

border: 1px solid lightgray;
border-radius: 0.5em;
`;

const ContainerName = styled.div`
display: flex;
`;

const StyledFont = styled.span`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 1rem;

font-size: small;
`;

const ProfileImg = styled.img`
width: 2rem;
height: 2rem;

border-radius: 5rem;

margin: 0 1rem;
margin-bottom: 1rem;
`;

const PostImg = styled.img`
  width: 23rem;
  height: 23rem;
`;

const LikeImg = styled.img`
width: 1.5rem;
height: 1.3rem;
margin-top: 1rem;
margin-left: 1rem;

cursor: pointer;
`;

const StyledP = styled.p`
display: inline-block;
margin-left: 1rem;

font-size: small;
color: skyblue;
`;

// https://comizle.tistory.com/35