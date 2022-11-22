import React from 'react';
import styled from 'styled-components';
import FeedState from './Feed/FeedState';
import FeedWriter from './Feed/FeedWriter';
import StyleSet from '../styles/styleSet';
const Feed = () => {
    return (
        <StyledFeed>
            <FeedWriter />
            <h2>본문 제목</h2>
            <p>본문 내용</p>
            <FeedState />
        </StyledFeed>
    );
};

export default Feed;

const StyledFeed = styled.div`
    border: 1px solid ${StyleSet.borderColor};
    width: 600px;
    height: fit-content;
    h2,
    p {
        margin-left: 10px;
    }
`;
