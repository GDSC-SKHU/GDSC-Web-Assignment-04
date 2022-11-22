import React from 'react';
import styled from 'styled-components';
import like from '../../imgs/like.png';

function FeedState() {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    );
}

const StyledUl = styled.ul`
    li {
        background-image: url(../../imgs/like.png);
    }
`;

export default FeedState;
