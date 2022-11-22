import React from 'react';
import styled from 'styled-components';
import styleSet from '../../styles/styleSet';

interface IComment {
    id: number;
    name: string;
    content: string;
}

function Comment(Props: IComment) {
    return (
        <StyledComment>
            {/* id:{Props.id} name:{Props.name},content:{Props.content} */}
            <p className="name">{Props.name}</p>
            <p className="content">{Props.content}</p>
        </StyledComment>
    );
}

const StyledComment = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${styleSet.borderColor};
    padding: 5px;
    p.name {
        font-weight: 800;
        font-size: 12px;
    }
    p.content {
        font-size: 12px;
    }
`;

export default Comment;
