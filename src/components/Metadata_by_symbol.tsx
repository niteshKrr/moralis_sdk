import React from 'react'
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";


const Metadata_by_symbol = () => {

    const runApp = async () => {
        await Moralis.start({
          apiKey:process.env.NEXT_PUBLIC_API_KEY,
          // ...and any other configuration
        });
      
        const symbols = ["MATIC"];
      
        const chain = EvmChain.ETHEREUM;
      
        const response = await Moralis.EvmApi.token.getTokenMetadataBySymbol({
          symbols,
          chain,
        });
      
        console.log(response.toJSON());
      };

  return (
    <div style={{ marginTop: "30px" }}>
      <div>Get Metadata_by_symbol</div>
      <button onClick={runApp}>click</button>
    </div>
  )
}

export default Metadata_by_symbol
