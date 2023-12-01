import { getDefaultWallets } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { Chain, configureChains, createConfig } from "wagmi"
import { publicProvider } from "wagmi/providers/public"

const evmSidechain: Chain = {
  id: 1440002,
  name: "EVM Sidechain",
  network: "evm-sidechain",
  rpcUrls: {
    default: { http: ["https://rpc-evm-sidechain.xrpl.org"] },
    public: { http: ["https://rpc-evm-sidechain.xrpl.org"] },
  },
  nativeCurrency: {
    decimals: 18,
    name: "xrp",
    symbol: "XRP",
  },
  //   contracts: {
  //     multicall3: {

  //     },
  //   },
  testnet: true,
}

export const { chains, publicClient } = configureChains([evmSidechain], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: "Mileage App",
  projectId: "Mielage",
  chains,
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})
