const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = "fresh solar torch canvas oxygen stumble meat arena smooth dilemma example prosper";

const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/0c83ba942bad4c1dbff2cb9a4a044fd3")
      },
      network_id: 3
    }
  }
};
