import { useState } from "react";
import Blog from "./Blog";
import GlobalStyle from "../../styles/global";


export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Blog />
    </>
  );
}

