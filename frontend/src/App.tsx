import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { BrowserRouter } from "react-router-dom"
import { WagmiConfig } from "wagmi"
import { AppRoutes } from "./pages/routes/app-routes"
import { chains, wagmiConfig } from "./shared/helpers"

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode chains={chains}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default App
