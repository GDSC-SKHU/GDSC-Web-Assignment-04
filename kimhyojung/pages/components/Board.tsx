import { css } from '@emotion/react';
import Image from 'next/image';
import boardImage from '../Main.jpg';
import styled from '@emotion/styled';

function Board() {
  return (
    <div>
      <h2>이쁜 서울 야경</h2>
      <section>
        <Image src={boardImage} alt="게시글 이미지" width={450} height={500} />
      </section>
      <article>노들섬 야경 이뻐요 꼭 가세요!</article>

      <style jsx>
        {`
          div {
            width: 60%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #f1f1f1;
            gap: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
            box-shadow: 0.2px 0px 0.2px;
            border-radius: 3%;
          }
          h2 {
            font-size: 1.3rem;
            display: flex;
            justify-content: center;
          }
          img {
            object-fit: cover;
            display: flex;
            justify-content: center;
          }
          article {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 650;
            margin-top: 3%;
          }
        `}
      </style>
    </div>
  );
}

export default Board;
