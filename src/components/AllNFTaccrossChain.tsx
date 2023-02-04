import React from "react";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const AllNFTaccrossChain = () => {
  const runApp = async () => {
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      // ...and any other configuration
    });

    const allNFTs = [];

    const address = "0x67099d557997E3Ee308B3C49029C331A2d4569Dc";

    const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

    for (const chain of chains) {
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
      });

      allNFTs.push(response.result);
    }

    for (let i = 0; i < allNFTs.length; i++) {
      //   console.log(allNFTs[i]);
      for (let j = 0; j < allNFTs[i].length; j++) {
        // @ts-ignore
        const metaData = allNFTs[i][j]._data.metadata;
        console.log(metaData);
        // const name = metaData.name;
        // const imgLoc = metaData.image;
        // if (name  !== undefined || imgLoc !== undefined || (name  !== undefined && imgLoc !== undefined)) {
        //   console.log("name: ", name);
        //   console.log("image loc: ", imgLoc);
        // }
        // else{
        //     j++;
        // }
      }
    }
  };

  return (
    <div>
      <button onClick={runApp}>click</button>
    </div>
  );
};

export default AllNFTaccrossChain;
