import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import CommentProfile from "./CommentProfile";
import ProfileImage from "./ProfileImage";

interface IComment {
  id: number;
  // name: string;
  content: string;
}

const INPUT_ID = "commeninput";

function Comment() {
  const [comments, setComments] = useState<IComment[]>([
  ]);

  const [currentComment, setCurrentComment] = useState<string>("");

  const onCurrentCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentComment(value);
  };

  const onCurrentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setComments((prev) => [
      ...prev,
      { id: prev.length + 1, content: currentComment },
    ]);

    setCurrentComment("");
  };

  return (
    <div>
      <StyledH3>Comment</StyledH3>
      <StyledHr />
      {comments.map((comment) => (
        <div key={comment.id}>
          <h2></h2>
          <StyledCommet>{comment.content}</StyledCommet>
        </div>
      ))}

      <StyledForm onSubmit={onCurrentSubmit}>
        <label htmlFor={INPUT_ID}><CommentProfile /></label>
        <StyledInput
          id={INPUT_ID}
          type="text"
          value={currentComment}
          onChange={onCurrentCommentChange}
        />
        <StyledButton type="submit"> 달기 </StyledButton>
      </StyledForm>
    </div>
  );
}

export default Comment;

const StyledHr = styled.hr`
margin-top: 10px;
`

const StyledH3 = styled.h3`
margin-top: 10px;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`
const StyledInput = styled.input`
  width:280px;
  padding: 8px;
  border-radius: 15px;
  border: none;
  background: #e4e4e4;
  :hover,
  :active{
    background: #f5f5f5;
    border: 1px solid #ccc;
  }
  :focus{
    background: #f5f5f5;
    outline: none;
  }
`
const StyledButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
  border-radius: 25px;
  :hover{
    background-color: #c5c0c0;
    color: white;
    transition: all .3s;
    cursor:pointer;
  }
`
const StyledCommet = styled.h2`
  font-size: 18px;
  text-align: center;
`