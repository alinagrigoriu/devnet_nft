import { ConnectButton } from "@mysten/wallet-kit";

export function Header() {

  return (
    <>
      <div className="header-widget">
        <div className="header-container">
          <div className="header-logo">
            <h1>devnetNFT</h1>
          </div>
          <div className="header-menu">
            <ConnectButton />
          </div>
        </div>
      </div>
    </>
  );

}
