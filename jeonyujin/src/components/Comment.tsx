import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

interface IComment {
  id: number;
  name: string;
  content: string;
}

const INPUT_ID = "commentinput";

function Comment() {
  const [comments, setComments] = useState<IComment[]>([]);

  const [currentComment, setcurrentComment] = useState<string>("");

  const onCurrentCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setcurrentComment(value);
  };

  const onCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setComments((prev) => [
      ...prev,
      { id: prev.length + 1, content: currentComment, name: "귀요미" },
    ]);
    setcurrentComment("");
  };

  return (
    <div>
      <StyledH1>댓글</StyledH1>
      <hr />
      {comments.map((comment) => (
        <div key={comment.id}>
          <CommentSpan>
            {comment.name}
            {comment.id} :{" "}
          </CommentSpan>
          <StyledSpan>{comment.content}</StyledSpan>
        </div>
      ))}
      <Form onSubmit={onCommentSubmit}>
        <Label htmlFor={INPUT_ID}>내용 : </Label>
        <Input
          id={INPUT_ID}
          onChange={onCurrentCommentChange}
          placeholder="댓글 추가..."
          type="text"
          value={currentComment}
        />

        <Button>작성</Button>
      </Form>
    </div>
  );
}

const StyledH1 = styled.h1`
  font-size: 1.3em;
  margin-left: 20px;
`;

const StyledSpan = styled.span`
  font-size: 1em;
  height: 2%;
`;

const CommentSpan = styled.span`
  font-weight: 600;
  margin-left: 40px;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  padding: 10px;
  margin: 20px;
  border: 2px solid whitesmoke;
  border-radius: 10px;
  background: #b5fcea;
`;

const Input = styled.input`
  width: 40%;
  margin: 10px;
  padding: 10px;
  border: none;
`;

const Button = styled.button`
  background-color: #5598fc;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
    rgba(0, 44, 97, 0.1) 0 3px 6px 0;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 10px;
  text-align: center;
  transition: all 0.2s;
  &:hover {
    background-color: #7eb0f6;
    transform: translateY(-2px);
  }
`;

export default Comment;
