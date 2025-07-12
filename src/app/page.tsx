"use client";

import styled from "styled-components";
import LogoNav from "../component/LogoNav"
// import BrownButton from "@/component/BrownButton";
// import { useRouter } from "next/navigation";
import LoginButton from "../component/LoginButton";
export default function Home() {
  // const router = useRouter();
  return (
    <Container>
      <LogoNav/>
      <Title>
        <MainTitle>
          Let&apos;s <Cheese>Cheese</Cheese> Time ! 
        </MainTitle>
        <SubTitle>
          Just as 🥛 milk matures into 🧀 cheese, invest your value.<br/>Store your coins safely in a vault alongside your goals,<br/>savor your principal and yield like perfectly aged cheese.<br/>Enjoy the flavor of maturation right now.
        </SubTitle>
      </Title>
      {/* <BrownButton
      text="Connect Wallet"
      onClickHandler={() => router.push("/main-page")}
      /> */}
       <LoginButton />
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
  align-items: left;

  background: url('/connect-wallet-bg-img.svg') no-repeat center center fixed;
  background-size: cover;

`;

const Title = styled.div`
  width: 100%;

  margin-left: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
`

const MainTitle = styled.p`
  color: #5B392E;
  font-family: Sansation;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const SubTitle = styled.p`
  color: #000;
  font-family: Sansation;
  font-size: 40px;
  font-style: light;
  font-weight: 300;
  line-height: normal;
`

const Cheese = styled.span`
  color: rgba(248, 157, 2, 0.95);
  font-family: Sansation;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`