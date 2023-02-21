import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { WalletKitProvider } from "@mysten/wallet-kit";

const App = () => {

  return (
    <>
      <WalletKitProvider>
        <Header />
        <Main />
        <Footer />
      </WalletKitProvider>
    </>
  )
}

export default App
