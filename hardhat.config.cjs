require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    sepolia: {
      url: process.env.INFURA_SEPOLIA_URL,
      accounts: process.env.SEPOLIA_PRIVATE_KEY
        ? [`0x${process.env.SEPOLIA_PRIVATE_KEY}`]
        : [],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY, // Add this!
    },
  },
};
