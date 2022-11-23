import React from 'react';
import styled from 'styled-components';
import styleSet from '../../styles/styleSet';
import Image from 'next/image';
import user from '../../imgs/user.png';

interface IComment {
    id: number;
    name: string;
    content: string;
}

function Comment(Props: IComment) {
    return (
        <StyledCommentBox>
            <Image
                src={user}
                alt="작은 유저 이미지"
                width={20}
                style={{ borderRadius: 3 }}
            />
            <StyledComment>
                {/* id:{Props.id} name:{Props.name},content:{Props.content} */}
                <p className="name">{Props.name}</p>
                <p className="content">{Props.content}</p>
            </StyledComment>
        </StyledCommentBox>
    );
}

const StyledComment = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    p.name {
        font-weight: 800;
        font-size: 12px;
    }
    p.content {
        font-size: 12px;
    }
`;

const StyledCommentBox = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid ${styleSet.borderColor};
    padding: 15px;
`;

export default Comment;
