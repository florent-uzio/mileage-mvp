import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const { PRIVATE_KEY = "" } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    xrpl: {
      url: "https://rpc-evm-sidechain.xrpl.org",
      chainId: 1440002,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;
