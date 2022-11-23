import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

interface IComment {
  id: number;
  content: string;
}

const RightSidebar = () => {
  const [comments, setComments] = useState<IComment[]>([
    { id: 0, content: "hello" },
  ]);
  const [currentComment, setcurrentComment] = useState<string>("");

  const onCurrentCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; //{value}랑 ChangeEvent<HTMLInputElement>가 뭔지 모르겠네..
    setcurrentComment(value);
    console.log(currentComment);
  };

  const onSubmitComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments((prev) => [
      ...prev,
      { id: prev.length + 1, content: currentComment },
    ]);

    setcurrentComment("");
  };
  return (
    <RightSidebarCss>
      <header>꺄앍</header>

      <section>
        {comments.map((comments) => (
          <div key={comments.id}>
            <p>{comments.content}</p>
          </div>
        ))}
        <form onSubmit={onSubmitComment}>
          <input
            id="commentInput"
            type="text"
            value={currentComment}
            onChange={onCurrentCommentChange}
          />
          <button>작성</button>
        </form>
      </section>
    </RightSidebarCss>
  );
};
export default RightSidebar;

const RightSidebarCss = styled.div`
  display: flex;
  flex-direction: column;
`;
