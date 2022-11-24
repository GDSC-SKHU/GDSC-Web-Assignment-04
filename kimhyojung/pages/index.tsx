import Head from 'next/head';
import Image from 'next/image';
import Board from './components/Board';
import Comment from './components/Comment';
import { Fragment } from 'react';
export default function Home() {
  return (
    <Fragment>
      <Board />
      <Comment />
    </Fragment>
  );
}
