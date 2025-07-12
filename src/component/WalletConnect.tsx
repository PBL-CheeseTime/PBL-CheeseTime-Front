"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";

const Web3AuthContext = createContext<Web3Auth | null>(null);

export const Web3AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);

  useEffect(() => {
    const init = async () => {
    const web3authInstance = new Web3Auth({
        clientId: process.env.NEXT_PUBLIC_WEB3_AUTH_CLIENT_ID!,
        web3AuthNetwork: "testnet",     // ← "sapphire_devnet" 대신
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: "0xaa36a7",
          rpcTarget: "https://rpc.sepolia.org",
          displayName: "Ethereum Sepolia Testnet",
        },
        uiConfig: {
          appName: "CheeseTime",
          mode: "auto",
          loginMethodsOrder: ["google", "github", "twitter", "kakao"],
          logoLight: "https://web3auth.io/images/web3auth-logo.svg",
          logoDark:  "https://web3auth.io/images/web3auth-logo---Dark.svg",
          defaultLanguage: "ko",
          loginGridCol: 3,
          primaryButton: "socialLogin",
          modalZIndex: "99998",
        },
      });      
      setWeb3auth(web3authInstance);

      await web3authInstance.initModal();};
    init();
  }, []);

  return (
    <Web3AuthContext.Provider value={web3auth}>
      {children}
    </Web3AuthContext.Provider>
  );
};

export const useWeb3Auth = () => useContext(Web3AuthContext);
