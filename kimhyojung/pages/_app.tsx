import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import '../styles/global.css';
/*
모든 페이지에서 동일한 글꼴을 사용할 거임
*/

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
