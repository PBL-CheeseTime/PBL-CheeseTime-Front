"use client";

import styled from "styled-components";
import YellowButton from "@/component/YellowButton";
import Header from "../../../component/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Header/>
      <YellowButton
      text="Create"
       onClickHandler={() => router.push("../create-Bottle/complete-Page")}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-size: cover;

`;