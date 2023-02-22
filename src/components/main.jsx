import Button from '@mui/material/Button';
import { ConnectButton, useWalletKit } from "@mysten/wallet-kit";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Main() {

  const { currentAccount, signAndExecuteTransaction } = useWalletKit();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const mint = () => {
    setOpen(!open);
    signAndExecuteTransaction({
      kind: "moveCall",
      data: {
        packageObjectId: "0x2",
        module: "devnet_nft",
        function: "mint",
        typeArguments: [],
        arguments: [
          "name",
          "description",
          "https://example.com/"
        ],
        gasBudget: 3000,
      },
    })
    .then(
      (res) => {
        setOpen(false);
        toast("Mint sucessful");
      }
    )
    .catch(
      (err) => {
        setOpen(false);
        toast(err.message);
      }
    );
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
              <Button variant="contained" onClick={mint}>Mint</Button>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
              >
                <div className="modal-transaction">
                  <h1>Minting in progress...</h1>
                  <CircularProgress color="inherit" />
                </div>
              </Backdrop>
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
      <ToastContainer />
    </>
  );
}
  
