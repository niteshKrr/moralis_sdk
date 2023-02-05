import React from 'react'
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";


const Balance_of_address = () => {

    const runApp = async() => {
        await Moralis.start({
          apiKey: process.env.NEXT_PUBLIC_API_KEY,
          // ...and any other configuration
        });
        
        // if you want your token balance then put respective token address below
        // you can also get your multisig balance through their address
        const address = '0x67099d557997E3Ee308B3C49029C331A2d4569Dc';
        
        const chain = EvmChain.ETHEREUM;
      
        const response = await Moralis.EvmApi.balance.getNativeBalance({
          address,
          chain,
        });
      
          console.log(response.toJSON());
      }

  return (
    <div style={{marginTop:"30px"}}>
      <div>
        Get Balance_of_address
      </div>
      <button onClick={runApp}>click</button>
    </div>
  )
}

export default Balance_of_address