import React from "react";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import ABI from "@/constants/ABI";
import CONTRACT_ADDRESS from "@/constants/ContractAddress";
import { ethers } from "ethers";

const Run_smartContract_functions = () => {
  const runApp = async () => {
    
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      // ...and any other configuration
    });

    const chain = EvmChain.GOERLI;

    const address = CONTRACT_ADDRESS;

    // token 0 address, e.g. WETH token address
    const functionName = "getMyNum";

    const response = await Moralis.EvmApi.utils.runContractFunction({
      address,
      functionName,
      abi: ABI,
      chain,
    });

    console.log(response.toJSON());
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div>Run_smartContract_functions</div>
      <button onClick={runApp}>click</button>
    </div>
  );
};

export default Run_smartContract_functions;
