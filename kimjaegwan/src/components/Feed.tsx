import React from 'react';
import styled from 'styled-components';
import FeedState from './Feed/FeedState';
import FeedWriter from './Feed/FeedWriter';
import StyleSet from '../styles/styleSet';
const Feed = () => {
    return (
        <StyledFeed>
            <FeedWriter />
            <StyledAticle>
                <h2>본문 제목입니다.</h2>
                <p>본문 내용입니다.</p>
            </StyledAticle>
            <FeedState />
        </StyledFeed>
    );
};

export default Feed;

const StyledFeed = styled.div`
    border: 1px solid ${StyleSet.borderColor};
    width: 600px;
    height: fit-content;
    h2 {
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
    }
    padding: 5px;
`;

const StyledAticle = styled.div`
    margin: 10px 5px;
`;
