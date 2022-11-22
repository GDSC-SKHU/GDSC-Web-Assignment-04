import React from 'react';
import styled from 'styled-components';
import Comments from './Comment/Comments';
import Input from './Comment/input';
const CommentLayout = () => {
    // 에브리타임 클론코딩
    return (
        <StyledCommentLayout>
            <Comments />
            <Input />
        </StyledCommentLayout>
    );
};

const StyledCommentLayout = styled.div`
    border: 1px solid gray;
    width: 600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
`;

export default CommentLayout;
