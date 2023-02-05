import React from 'react'
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";


const All_transactions_of_address = () => {

  const runApp = async () => {
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      // ...and any other configuration
    });
    
    const address = "0x67099d557997E3Ee308B3C49029C331A2d4569Dc";
  
      const chain = EvmChain.GOERLI;
  
    const response = await Moralis.EvmApi.transaction.getWalletTransactions({
          address,
          chain,
      });
    
      for(let i = 0 ; i<response.result.length ; i++){
        // @ts-ignore
        console.log(response.toJSON().result[i]);
      }

  }

  return (
    <div style={{marginTop:"30px"}}>
      <div>
        Get All_transactions_of_address
      </div>
      <button onClick={runApp}>click</button>
    </div>
  )
}

export default All_transactions_of_address