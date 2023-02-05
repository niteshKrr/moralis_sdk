import AllNFTaccrossChain from "@/components/AllNFTaccrossChain";
import All_ERC20_token_ownby_address from "@/components/All_ERC20_token_ownby_address";
import All_transactions_of_address from "@/components/All_transactions_of_address";
import Balance_of_address from "@/components/Balance_of_address";
import Run_smartContract_functions from "@/components/Run_smartContract_functions";
import React from "react";

export default function Home() {
  return (
    <>
      <div> <AllNFTaccrossChain/> </div>
      <div> <All_ERC20_token_ownby_address/> </div>
      <div> <Balance_of_address/> </div>
      <div> <All_transactions_of_address/> </div>
      <div> <Run_smartContract_functions/> </div>
    </>
  );
}
