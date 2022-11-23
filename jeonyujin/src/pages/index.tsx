import { useState } from "react";
import Blog from "./Blog";
import GlobalStyle from "../styles/global";


export default function Home() {
  const [state, setState] = useState();
  return (
    <>
      <GlobalStyle />
      <Blog />
    </>
  );
}

