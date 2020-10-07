const ControllerInterface = artifacts.require("./interfaces/yearn/IController.sol");
const StrategyProxy = artifacts.require("./strategies/StrategyProxy");
const StrategyCurveYVoterProxy = artifacts.require("./strategies/StrategyCurveYVoterProxy");

// NOTE: need to verify this address 
const CONTROLLER_ADDR = '0x9e65ad11b299ca0abefc2799ddb6314ef2d91080';

module.exports = async function(deployer, network, accounts)  {
  console.log(`Deploying smart contracts to '${network}'.`)

  console.log('account 0', accounts[0]);
  deployer.deploy(StrategyProxy);

  // const controller = await ControllerInterface.at(CONTROLLER_ADDR);

  // deployer.deploy(StrategyCurveYVoterProxy, controller.address);
};
