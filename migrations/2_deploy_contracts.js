
const StrategyCreamCRV = artifacts.require("./strategies/StrategyCreamCRV.sol");

const VAULT = '0xF2E47c29fC9f31Cc50A62dEA24956545772921bc';

module.exports = async function(deployer, network, accounts)  {
  console.log(`Deploying smart contracts to '${network}'.`)

  console.log('account 0', accounts[0]);

  const strategy = await deployer.deploy(StrategyCreamCRV, VAULT);

  console.log('Strategy deployed at: ', strategy);
};
