import React from 'react';
import styled from 'styled-components';
import FeedState from './Feed/FeedState';
import FeedWriter from './Feed/FeedWriter';
import StyleSet from '../styles/styleSet';
import gyeongju2 from '../imgs/gyeongju2.jpeg';
import Image from 'next/image';
const Feed = () => {
    return (
        <StyledFeed>
            <FeedWriter />
            <StyledAticle>
                <h2>경주 여행</h2>
                <Image
                    src={gyeongju2}
                    alt="경주 여행 사진"
                    height={400}
                    style={{ objectFit: 'contain' }}
                />
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
    padding: 15px;
`;

const StyledAticle = styled.div`
    margin: 10px 5px;
`;
