"use client";

import styled from "styled-components";
import BrownButton from "@/component/BrownButton";
import Header from "../../../component/Header";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
  return (
    <Container>
      <Header/>
      <Title>
        <SubTitle>
          <SubTitle2>Transfer completed.</SubTitle2><br/>You can get the Badge now!<br/><br/>
        </SubTitle>
      </Title>
      <BrownButton
      text=" Receive Badge"
       onClickHandler={() => router.push("../my-Cheese")}
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

const Title = styled.div`
  width: 100%;

  margin-left: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const SubTitle = styled.p`
  color: #5B392E;
  font-family: Sansation;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const SubTitle2 = styled.span`
  color: rgba(248, 157, 2, 0.95);
  font-family: Sansation;
  font-size: 80px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
`