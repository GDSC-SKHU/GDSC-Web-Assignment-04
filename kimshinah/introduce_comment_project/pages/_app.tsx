import type { AppProps } from "next/app";
import "../styles/leftSidebar.css";
import "../styles/MainModal.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
