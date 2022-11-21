import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Feed from '../components/Feed';
import CommentLayoutContainer from '../components/CommentLayoutContainer';

export default function Home() {
    return (
        <div>
            <Feed />
            <CommentLayoutContainer />
        </div>
    );
}
