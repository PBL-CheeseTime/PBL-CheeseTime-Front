"use client";

import styled from "styled-components";
import YellowButton from "@/component/YellowButton";
import Header from "../../component/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Header/>
      <Title>
        <CheeseNum>
          There&apos;s <Cheese>6</Cheese> <CheeseNum2>CHEESE!</CheeseNum2>
        </CheeseNum>
        <SubTitle>
          Go ahead, invest your value<SubTitle2>Enjoy the flavor of maturation right now!</SubTitle2>
        </SubTitle>
      </Title>
      <YellowButton
      text="Create Bottle"
       onClickHandler={() => router.push("../create-Bottle")}
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

const CheeseNum = styled.p`
  color: #5B392E;
  font-family: Sansation;
  font-size: 45px;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
`

const CheeseNum2 = styled.span`
  color: #5B392E;
  font-family: Sansation;
  font-size: 45px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`

const SubTitle = styled.p`
  color: rgba(248, 157, 2, 0.95);
  font-family: Sansation;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const SubTitle2 = styled.p`
  color: #5B392E;
  font-family: Sansation;
  font-size: 70px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
`

const Cheese = styled.span`
  color: rgba(248, 157, 2, 0.95);
  font-family: Sansation;
  font-size: 45px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`