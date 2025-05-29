"use client";

import styled from "styled-components";
import Header from "../../../component/Header";
import OnButton from "@/component/OnButton";
import OffButton from "@/component/OffButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Header/>
      <Text_>
        <OffButton
          text="Locked"
          onClickHandler={() => router.push("../manage-Bottle")}
        />
        <OnButton
          text="Ready"
        />
      </Text_>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 25vh;

  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  background-size: cover;

`;

const Text_ = styled.div`
  width: 100%;
  height: 10vh;

  border-bottom: 2px solid #D9D9D9;
  margin-left: 70px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: top;
  text-align: left;
  z-index: 10;
`