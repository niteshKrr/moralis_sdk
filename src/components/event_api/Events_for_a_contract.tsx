import React from "react";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import CONTRACT_ADDRESS from "@/constants/ContractAddress";
import ABI from "@/constants/ABI";

const Events_for_a_contract = () => {
  const runApp = async () => {
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    });

    const address = CONTRACT_ADDRESS;

    const chain = EvmChain.GOERLI;

    // you will get topic from logs
    const topic =
      "0x7c40cb0c5573d0e22f038f6f427c7f19c004db8c3c8677ba8de62ebb5d884638";

    const abi = {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newNum",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
      ],
      name: "myEvent",
      type: "event",
    };

    const response = await Moralis.EvmApi.events.getContractEvents({
      address,
      chain,
      topic,
      abi,
    });

    for (let i = 0; i < response.result.length; i++) {
      // @ts-ignore
      console.log(response.toJSON().result[i].data);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div>Get Events_for_a_contract</div>
      <button onClick={runApp}>click</button>
    </div>
  );
};

export default Events_for_a_contract;
