import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { BrowserRouter } from "react-router-dom"
import { WagmiConfig } from "wagmi"
import { AppRoutes } from "./pages/routes/app-routes"
import { chains, wagmiConfig } from "./shared/helpers"

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          {/* <Flex
        css={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      > */}

          <AppRoutes />
          {/* </Flex> */}
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
