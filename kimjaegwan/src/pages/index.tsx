import Feed from '../components/Feed';
import CommentLayout from '../components/CommentLayout';
import styled from 'styled-components';

export default function Home() {
    const Container = styled.div`
        display: flex;
        flex-direction: column;
    `;

    return (
        <Container>
            <Feed />
            <CommentLayout />
        </Container>
    );
}
