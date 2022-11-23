import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import emotionicon from "../../public/img/happy.png";
import heart from "../../public/img/heart.png";
import chat from "../../public/img/chat.png";
import dm from "../../public/img/dm.png";
import bookmark from "../../public/img/bookmark.png";
import profile from "../../public/img/user.png";

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
        <div>sina_mong</div>
        <div></div>
      </header>

      <section>
        <div>
          {comments.map((comments) => (
            <RightSidebarCss_content_comment key={comments.id}>
              <Image src={profile} alt="profile_img" width={29} height={29} />
              <RightSidebarCss_content_comment_detail>
                <div>
                  <p>익명 {comments.id + 1}</p>
                  <p>{comments.content}</p>
                </div>
                <Image src={heart} alt="heart" width={10} height={10} />
              </RightSidebarCss_content_comment_detail>
            </RightSidebarCss_content_comment>
          ))}
        </div>

        <div>
          <RightSidebarCss_form_top>
            <div>
              <RightSidebarCss_form_top_emoji>
                <div>
                  <Image src={heart} alt="heart" />
                  <Image src={chat} alt="chat" />
                  <Image src={dm} alt="dm" />
                </div>
                <div>
                  <Image src={bookmark} alt="bookmark" />
                </div>
              </RightSidebarCss_form_top_emoji>
            </div>
            <div>좋아요 1,431개</div>
            <div>1일 전</div>
          </RightSidebarCss_form_top>

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

  header {
    width: 100%;
    height: 3.2em;
    background-color: white;
    border-bottom: 0.05em solid #e5e5e5;
    display: flex;
    align-items: center;
    padding: 1em;
  }

  section div:first-child {
    max-height: 24.5em;
    overflow: scroll;
  }
`;

//글 마다 간격 떨어뜨려놓아서 댓글 보기 편하게 만들기
const RightSidebarCss_content_comment = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
  font-size: 0.75em;

  p {
    margin-left: 1em;
  }
`;

const RightSidebarCss_content_comment_detail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
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
    outline: none;
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

const RightSidebarCss_form_top = styled.div`
  height: 5em;
  padding: 0.5em;
  border-top: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:nth-child(2) {
    font-size: 0.7em;
    font-weight: 700;
  }

  div:nth-child(3) {
    font-size: 0.1em;
  }
`;
const RightSidebarCss_form_top_emoji = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 1em;
    height: 1em;
  }
  img:nth-child(2),
  img:nth-child(3) {
    width: 1.2em;
    height: 1.2em;
  }

  div:first-child {
    width: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div:last-child img {
    width: 1.2em;
    height: 1.2em;
  }
`;
