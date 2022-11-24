import { ChangeEvent, FormEvent, useState } from 'react';

function Comment() {
  const [comment, setcomment] = useState('');
  const [comments, setcomments] = useState([]);
  const Onchange = (event: ChangeEvent<HTMLInputElement>) =>
    setcomment(event.target.value);

  const postcomment = (e) => {
    const newcomments = [...comments];
    newcomments.push(comment);
    setcomments(newcomments);
    setcomment('');
  };

  return (
    <div>
      <section>
        {comments.map((comment, index) => (
          <p key={index}>
            <p>{comment}</p>
          </p>
        ))}
      </section>
      <article>
        <input type="text" value={comment} onChange={Onchange} />
        <button onClick={postcomment}>작성</button>
      </article>
      <style jsx>
        {`
          ul {
            display: flex;
            flex-direction: column;
          }
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            margin-top: 5px;
          }
          section {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          article {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}

export default Comment;
