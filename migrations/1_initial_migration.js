
const TO_DEPLOY = artifacts.require("./GenericLender/GenericDyDx.sol");

module.exports = async function(deployer, network, accounts)  {
  console.log(`Deploying smart contracts to '${network}'.`)
  console.log('account 0', accounts[0]);

  const strategy = await deployer.deploy(TO_DEPLOY, '0x520a45e22b1eb5d7bde09a445e70708d2957b365', 'DyDxLenderWeth');

  console.log('Strategy deployed at: ', strategy);
};
