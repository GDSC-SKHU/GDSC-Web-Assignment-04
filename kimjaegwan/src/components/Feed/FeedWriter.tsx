import React from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import userImg from '../../imgs/user.png';
import dayjs from 'dayjs';

function FeedWriter() {
    return (
        <StyledFeedWriter>
            <User />
            <Menu />
        </StyledFeedWriter>
    );
}

const User = () => {
    return (
        <StyledUser>
            <Image
                src={userImg}
                width="40"
                placeholder="blur"
                style={{ borderRadius: 5 }}
                alt={'유저 사진'}
            />
            <StyledUserDetail>
                <p>익명</p>
                <p>{dayjs().format('MM/DD HH:mm')}</p>
            </StyledUserDetail>
        </StyledUser>
    );
};

const Menu = () => {
    return <StyledMenu>쪽지 신고</StyledMenu>;
};

const StyledFeedWriter = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledUser = styled.div`
    display: flex;
`;

const StyledUserDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5px;
`;

const StyledMenu = styled.p`
    color: gray;
    font-size: 0.7rem;
`;

const StyledP = css`
    font-weight: 300;
`;

export default FeedWriter;
