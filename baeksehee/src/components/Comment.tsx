import styled from "styled-components";
import { ChangeEvent, FormEvent, useState } from "react";

interface IComment {
  id: number;
  content: string;
}

interface Props {
  imgSrc: string;
}

function Comment({ imgSrc }: Props) {
  const [comments, setComments] = useState<IComment[]>([
    { id: 0, content: "" },
  ]);
  const [currentComment, setCurrentComment] = useState<string>("");

  const onCurrentComment = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentComment(value);
  };

  const onCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setComments((prev) => [
      ...prev,
      { id: prev.length + 1, content: currentComment },
    ]);

    setCurrentComment("");
  };

  return (
    <div>
      <StyledH1>
        <StyledSpan>sehee</StyledSpan>'s today
      </StyledH1>

      <StyledDiv>
        <StyledImageWrapper>
          <StyledImg src={imgSrc}></StyledImg>
        </StyledImageWrapper>

        <p>벌써 크리스마스라니!</p>
        <p>댓글창</p>
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <StyledH2>{comment.content}</StyledH2>
            </div>
          ))}
          <div>
            <StyledForm onSubmit={onCommentSubmit}>
              <label htmlFor="commentinput">댓글 : </label>
              <StyledInput
                id="commentinput"
                type="text"
                placeholder="댓글 달기..."
                value={currentComment}
                onChange={onCurrentComment}
              />
              <StyledButton>등록</StyledButton>
            </StyledForm>
          </div>
        </div>
      </StyledDiv>
    </div>
  );
}

export default Comment;

const StyledDiv = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 2px;
  border: solid 1px black;

  margin-left: 500px;
  overflow: auto;
`;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const StyledSpan = styled.span`
  font-size: 70px;
  color: pink;
`;

const StyledH2 = styled.h2`
  text-align: left;
  font-size: 7px;
  color: pink;
`;

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 80%;

  margin-top: 70px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 80%;

  margin: 0px;
  object-fit: cover;
`;

const StyledForm = styled.form`
  border: 1px black;

  margin-top: 2px;
  display: flex;
`;

const StyledInput = styled.input`
  flex: 1;
  text-align: center;

  border: none;
  border-bottom: 3px pink solid;
`;
const StyledButton = styled.button`
  background-color: #f199bc;
  color: #d4dfe6;

  margin-left: 40px;

  border: #d4dfe6;
  position: relative;
  padding: 15px 30px;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
`;
