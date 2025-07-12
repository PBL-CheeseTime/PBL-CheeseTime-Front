// src/component/LoginButton.tsx
"use client";
import styled from "styled-components";
import {
  useWeb3AuthConnect,
  useWeb3AuthDisconnect,
  useWeb3AuthUser,
} from "@web3auth/modal/react";

export default function LoginButton() {
  const { connect, loading: connecting } = useWeb3AuthConnect();
  const { disconnect } = useWeb3AuthDisconnect();
  const { userInfo, loading: userLoading } = useWeb3AuthUser();

  if (userLoading) return <LoginBtn disabled>loading…</LoginBtn>;

  return userInfo ? (
    <LoginBtn onClick={() => disconnect()}>
      Logout ({userInfo.email})
    </LoginBtn>
  ) : (
    <LoginBtn disabled={connecting} onClick={() => connect()}>
      {connecting ? "Connecting…" : "Login with Web3Auth"}
    </LoginBtn>
  );
}

const LoginBtn = styled.button`
  width: 420px;
  height: 70px;
  margin-top: 60px;
  margin-left: 70px;

  background: #5b392e;
  color: #ffffff;

  font-size: 25px;
  font-family: Sansation, sans-serif;
  font-weight: 700;

  border: none;
  border-radius: 10px;
  cursor: pointer;
  display: flex;          /* 중앙 정렬용 */
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s;

  &:hover {
    background-color: #34221c;   /* 요청하셨던 hover 색 (#34221c) */
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;