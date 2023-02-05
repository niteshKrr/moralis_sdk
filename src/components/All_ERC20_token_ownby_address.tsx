import React from "react";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const All_ERC20_token_ownby_address = () => {
  const runApp = async () => {
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      // ...and any other configuration
    });

    const address = "0x67099d557997E3Ee308B3C49029C331A2d4569Dc";

    const chain = EvmChain.GOERLI;

    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      address,
      chain,
    });

    console.log(response.toJSON());
  };

  return (
    <div style={{marginTop:"30px"}}>
      <div>All_ERC20_token_ownby_address</div>
      <button onClick={runApp}>click</button>
    </div>
  );
};

export default All_ERC20_token_ownby_address;
