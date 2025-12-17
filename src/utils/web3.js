import Web3 from "web3";

export const connectWallet = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);

    await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const accounts = await web3.eth.getAccounts();
    const balanceWei = await web3.eth.getBalance(accounts[0]);
    const balanceEth = web3.utils.fromWei(balanceWei, "ether");

    return {
      web3,
      account: accounts[0],
      balance: balanceEth,
    };
  } else {
    alert("MetaMask is not installed");
  }
};
