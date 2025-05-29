"use client";

import styled from "styled-components";
import Header from "../../component/Header";

export default function Home() {
  return (
    <Container>
      <Header/>
      <Text_>
        <CheeseCount>
          <CheeseCount2>Cheese</CheeseCount2> you made : 
        </CheeseCount>
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

  border-bottom: 3px solid #D9D9D9;
  margin-left: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  z-index: 10;
`

const CheeseCount = styled.p`
  color: #5B392E;
  font-family: Sansation;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const CheeseCount2 = styled.span`
  color: rgba(248, 157, 2, 0.95);
  font-family: Sansation;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`