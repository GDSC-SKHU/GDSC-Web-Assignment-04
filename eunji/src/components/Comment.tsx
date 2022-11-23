import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

interface IComment {
    content: string,
}

export default function Comment() {
    const [Comments, setComment] = useState<IComment[]>([{ content: '' }]);

    const [currentComment, setCurrentComment] = useState<string>('');

    const onCurrentCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setCurrentComment(value);
    }

    const onCommentsubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setComment((prev: any) => ([...prev, { content: currentComment }]));

        setCurrentComment('');
    }

    const INPUTCOMMENT = "commentinput";

    return (
        <div>
            {Comments.map((comment) => (
                <div>
                    <StyledP>{comment.content}</StyledP>
                </div>
            ))}
            <StyledDiv>
                <StyledDiv2>
                    <form onSubmit={onCommentsubmit}>
                        <StyledInput placeholder="댓글 달기..." id={INPUTCOMMENT} type="text" value={currentComment} onChange={onCurrentCommentChange} />
                        <StyledButton type="submit">게시</StyledButton>
                    </form>
                </StyledDiv2>
            </StyledDiv>
        </div>
    )
}

const StyledP = styled.p`
margin-left: 1rem;
font-size: small;
`;

const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 23rem;
`;

const StyledDiv2 = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const StyledInput = styled.input`
outline: none;
border: none;
width: 18.3rem;
margin-left: 1rem;
`;

const StyledButton = styled.button`
border: none;
margin-right: 1rem;

color: skyblue;
background-color: white;
font-weight: bold;
cursor: pointer;
`;