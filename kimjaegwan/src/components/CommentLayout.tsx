import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment/Comment';
import StyleSet from '../styles/styleSet';
import { idText } from 'typescript';
import Image from 'next/image';
import submit from '../imgs/submit.png';
interface IComment {
    id: number;
    name: string;
    content: string;
}
const CommentLayout = () => {
    // 에브리타임 클론코딩

    const [comments, setComments] = useState<IComment[]>([
        { id: 0, name: `익명1`, content: 'test comment' },
    ]);

    const [currentComment, setCurrentComment] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const _onCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(currentComment);

        if (currentComment === '') {
            alert('내용을 입력하세요.');
            return;
        }

        setComments([
            ...comments,
            {
                id: comments.length,
                name: '익명' + (comments.length + 1),
                content: currentComment,
            },
        ]);
        setCurrentComment(() => '');
        inputRef.current?.focus();
    };

    const _onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCurrentComment(() => value);
    };

    return (
        <StyledCommentLayout>
            {comments.map((comment) => (
                <Comment
                    key={comment.id}
                    id={comment.id}
                    name={comment.name}
                    content={comment.content}
                />
            ))}
            <StyledForm onSubmit={_onCommentSubmit}>
                <input
                    id="COMMENT"
                    type="text"
                    placeholder="댓글을 입력하세요."
                    onChange={_onInputChange}
                    value={currentComment}
                    ref={inputRef}
                />
                <button>
                    <Image
                        src={submit}
                        width={40}
                        height={45}
                        alt="submit"
                        style={{ objectFit: 'cover' }}
                    />
                </button>
            </StyledForm>
        </StyledCommentLayout>
    );
};

const StyledCommentLayout = styled.div`
    border: 1px solid ${StyleSet.borderColor};
    border-top: 0px;
    width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;
const StyledForm = styled.form`
    display: flex;
    input {
        all: unset;
        background-color: ${StyleSet.backgroundColor};
        height: 35px;
        width: 92%;
        font-size: 13px;
        padding: 5px;
    }
    button {
        all: unset;
        height: 100%;
        width: 8%;
        background-color: ${StyleSet.buttonColor};
        display: flex;
        justify-content: center;
        align-items: stretch;
    }
`;

export default CommentLayout;
