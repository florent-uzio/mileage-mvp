import { getDefaultWallets } from "@rainbow-me/rainbowkit"
import "@rainbow-me/rainbowkit/styles.css"
import { Chain, configureChains, createConfig } from "wagmi"
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import { publicProvider } from "wagmi/providers/public"

const xrplEvmRpc = "https://rpc-evm-sidechain.xrpl.org"

const evmSidechain: Chain = {
  id: 1440002,
  name: "EVM Sidechain",
  network: "evm-sidechain",
  rpcUrls: {
    default: { http: [xrplEvmRpc] },
    public: { http: [xrplEvmRpc] },
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

export const { chains, publicClient } = configureChains(
  [evmSidechain],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: xrplEvmRpc,
      }),
    }),
    publicProvider(),
  ],
)

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
