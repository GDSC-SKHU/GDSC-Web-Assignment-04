import { ChangeEvent, FormEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";
import profile from "../../public/images/abstract-user-flat-4.png";
import Image from "next/image";

export interface IComment {
  id: number;
  name: string;
  comment: string;
}

const Comment = () => {
  const [comment, setComment] = useState<IComment[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [time, setTime] = useState<string>("");

  const commentTime = () => {
    const date = new Date();
    const year = String(date.getUTCFullYear());
    const month = String(date.getUTCMonth() + 1);
    const day = String(date.getUTCDate());
    setTime(`${year}-${month}-${day}`);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentText.length < 1) return alert("댓글을 입력해주세요");
    setComment((prev) => [
      ...prev,
      { id: prev.length + 1, name: "익명", comment: currentText },
    ]);
    setCurrentText("");
    commentTime();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCurrentText(value);
  };

  return (
    <StyledContainer>
      <StyledTitle>
        <h3>{comment.length}개의 댓글</h3>
      </StyledTitle>
      <StyledForm onSubmit={onSubmit}>
        <StyledTextArea
          placeholder="댓글을 작성하세요"
          value={currentText}
          onChange={onChange}
        ></StyledTextArea>
        <StyledButtonBox>
          <StyledButton>댓글 작성</StyledButton>
        </StyledButtonBox>
      </StyledForm>
      <StyledCommentList>
        {comment.map((comments) => (
          <StyledCommentBox key={comments.id}>
            <StyledCommentUser>
              <Image src={profile} alt="profile" width={50} height={50} />
              <StyledUserInfo>
                <StyledUserName>{comments.name}</StyledUserName>
                <StyledDate>{time}</StyledDate>
              </StyledUserInfo>
            </StyledCommentUser>
            <StyledContents>{comments.comment}</StyledContents>
          </StyledCommentBox>
        ))}
      </StyledCommentList>
    </StyledContainer>
  );
};

export default Comment;

const StyledContainer = styled.div`
  width: 75%;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 1rem;
`;
const StyledTitle = styled.div`
  width: 100%;
  padding: 1rem 0;
`;
const StyledForm = styled.form`
  width: 100%;
`;
const StyledCommentList = styled.div`
  width: 100%;
`;
const StyledTextArea = styled.input`
  width: 100%;
  border: none;
  background-color: #1e1e1e;
  padding: 3rem 1rem;
  border-radius: 0.3rem;
`;
const StyledButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.15rem;
`;
const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 4px;
  color: black;
  background-color: #96f2d7;
  padding: 0px 1.25rem;
  height: 2rem;
`;
const StyledCommentBox = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1.5rem 0;
`;
const StyledCommentUser = styled.div`
  display: flex;
  align-items: center;
`;
const StyledUserName = styled.div`
  margin-left: 1rem;
`;
const StyledContents = styled.div`
  margin-top: 2rem;
  margin-left: 0.5rem;
  font-size: 1.25rem;
  overflow: hidden;
`;
const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDate = styled.div`
  margin-left: 1rem;
  margin-top: 0.3rem;
  font-size: 0.75rem;
  opacity: 0.75;
`;
