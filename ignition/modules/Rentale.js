const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NftModule", (m) => {

  const token = m.contract("RentableNFT", ["MY4907", "MNFT"]);

  return { token };
});
