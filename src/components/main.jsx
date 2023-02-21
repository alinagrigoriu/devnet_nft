import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";

export function Main() {

  const { currentAccount, signAndExecuteTransaction } = useWalletKit();

  const handleClick = async () => {
    await signAndExecuteTransaction({
      kind: "moveCall",
      data: {
        packageObjectId: "0x2",
        module: "devnet_nft",
        function: "mint",
        typeArguments: [],
        arguments: [
          "sui",
          "devnet live",
          "https://miro.medium.com/v2/resize:fit:750/format:webp/1*IRwa2GrRrF3HaCsR-h3yIQ.png",
        ],
        gasBudget: 3000,
      },
    });
  };

  return(
    <>
      {
        currentAccount
        ?
        <>
          <div className="main-widget">
            <div className="main-container">
              <h1>Try Mint a NFT</h1>
              <h2>Click in the button bellow</h2>
              <button onClick={handleClick}>Mint</button>
            </div>
          </div>
        </>
        :
        <>
          <div className="main-widget">
            <div className="main-container">
              <h1>Welcome to Sui devnetNFT</h1>
              <h2>Connect your wallet to start</h2>
              <ConnectButton />
            </div>
          </div>
        </>
      }
    </>
  );
}
  
