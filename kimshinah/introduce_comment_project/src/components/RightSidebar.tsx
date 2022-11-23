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

  const onCurrentTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target; //{value}랑 ChangeEvent<HTMLInputElement>가 뭔지 모르겠네..
    setcurrentComment(value);
    console.log(currentComment);
  };
  return (
    <RightSidebarCss>
      <header>꺄앍</header>

      <section>
        <form>
          <input
            id="commentInput"
            type="text"
            value={currentComment}
            onChange={onCurrentTodoChange}
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
