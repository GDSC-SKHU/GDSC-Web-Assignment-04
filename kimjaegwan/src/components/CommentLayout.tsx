import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import Comment from './Comment/Comment';
import Input from './Comment/input';
import StyleSet from '../styles/styleSet';
import { idText } from 'typescript';
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
            <form onSubmit={_onCommentSubmit}>
                <input
                    id="COMMENT"
                    type="text"
                    placeholder="댓글을 입력하세요."
                    onChange={_onInputChange}
                    value={currentComment}
                    ref={inputRef}
                />
                <button>댓글쓰기</button>
            </form>
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

export default CommentLayout;
