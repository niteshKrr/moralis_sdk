import React from 'react'
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import CONTRACT_ADDRESS from '@/constants/ContractAddress';

const Logs_for_a_contract = () => {

    const runApp = async () => {
        await Moralis.start({
          apiKey: process.env.NEXT_PUBLIC_API_KEY,
          // ...and any other configuration
        });
      
        const address = CONTRACT_ADDRESS;
      
        const chain = EvmChain.GOERLI;
      
        const response = await Moralis.EvmApi.events.getContractLogs({
          address,
          chain,
        });

        for (let i = 0; i < response.result.length; i++) {
            // @ts-ignore
            console.log(response.toJSON().result[i]);
          }
      
      };

  return (
    <div style={{ marginTop: "30px" }}>
      <div>Get logs_for_a_contract</div>
      <button onClick={runApp}>click</button>
    </div>
  );
}

export default Logs_for_a_contract
