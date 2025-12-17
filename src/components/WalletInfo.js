import { connectWallet } from "../utils/web3";
import { useState } from "react";

export default function WalletInfo() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");

  const handleConnect = async () => {
    const data = await connectWallet();
    setAccount(data.account);
    setBalance(data.balance);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Wallet Information</h3>

      {!account ? (
        <button onClick={handleConnect}>Connect Wallet</button>
      ) : (
        <>
          <p><b>Address:</b> {account}</p>
          <p><b>Balance:</b> {balance} ETH</p>
        </>
      )}
    </div>
  );
}
