import styled from "styled-components";
import Layout from "../components/Layout";
import GlobalStyle from "./GlobalStyle";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Layout name="Piki" content="I'm happy today" />
    </>
  );
}
