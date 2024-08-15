import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { createConfig, http } from "@wagmi/core"
import { type Chain } from "viem"

const xrplEvmRpc = "https://rpc-evm-sidechain.xrpl.org"

export const evmSidechain: Chain = {
  id: 1440002,
  name: "EVM Sidechain",
  rpcUrls: {
    default: { http: [xrplEvmRpc] },
    public: { http: [xrplEvmRpc] },
  },
  blockExplorers: {
    default: { name: "EVM Sidechain Explorer", url: "https://explorer.xrplevm.org/" },
  },
  nativeCurrency: {
    decimals: 18,
    name: "xrp",
    symbol: "XRP",
  },
  testnet: true,
}

export const config = createConfig({
  chains: [evmSidechain],
  transports: {
    [evmSidechain.id]: http(xrplEvmRpc),
  },
})

export const wagmiConfig = getDefaultConfig({
  appName: "Mileage App",
  projectId: "Mielage",
  chains: [evmSidechain],
})

// export const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// })
