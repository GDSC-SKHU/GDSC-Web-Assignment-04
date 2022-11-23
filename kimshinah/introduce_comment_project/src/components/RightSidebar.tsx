import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import emotionicon from "../../public/img/happy.png";
//className이름을 지어두고 사용은 안하면 안되나?
//map함수 알아보기
// ...prev 알아보기
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
      <header>
        <div></div>
        <div></div>
        <div></div>
      </header>

      <section>
        <div>
          {comments.map((comments) => (
            <div key={comments.id}>
              <p>{comments.content}</p>
            </div>
          ))}
        </div>

        <div>
          <RightSidebarCss_form onSubmit={onSubmitComment}>
            <Image_Container>
              <Image src={emotionicon} alt="picture" />
            </Image_Container>
            <input
              id="commentInput"
              type="text"
              value={currentComment}
              onChange={onCurrentCommentChange}
              placeholder="댓글 달기..."
            />
            <button>게시</button>
          </RightSidebarCss_form>
        </div>
      </section>
    </RightSidebarCss>
  );
};
export default RightSidebar;

const RightSidebarCss = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RightSidebarCss_form = styled.form`
  display: flex;
  height: 2.5em;
  border: 0.05em solid #e5e5e5;

  input {
    border: none;
    border-right: none;
    font-size: 0.2em;
  }
  button {
    width: 10em;
    border: none;
    background-color: #ffffff;
    color: #22adde;
    font-size: 0.2em;
    font-weight: 500;
    margin: 1em;
  }
`;

const Image_Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1em;
    height: 1em;
    margin: 0.6em;
  }
`;
