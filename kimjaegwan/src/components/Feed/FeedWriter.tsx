import React from 'react';
import styled from 'styled-components';

function FeedWriter() {
    return (
        <StyledFeedWriter>
            <User />
            <Menu />
        </StyledFeedWriter>
    );
}

const User = () => {
    return <p>user</p>;
};

const Menu = () => {
    return <p>쪽지 신고</p>;
};

const StyledFeedWriter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default FeedWriter;
