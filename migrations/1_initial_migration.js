
const StrategyCreamCRV = artifacts.require("./Strategy.sol");

const VAULT = '0xD6B60235183756C6f7229c9eDA366c1d1d45Da52';

module.exports = async function(deployer, network, accounts)  {
  console.log(`Deploying smart contracts to '${network}'.`)

  console.log('account 2', accounts[2]);

  const strategy = await deployer.deploy(StrategyCreamCRV, VAULT);

  console.log('Strategy deployed at: ', strategy);
};
