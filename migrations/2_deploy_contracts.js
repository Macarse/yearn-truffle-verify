const ControllerInterface = artifacts.require("./interfaces/yearn/IController.sol");
const StrategyProxy = artifacts.require("./strategies/StrategyProxy");
const StrategyCurveYVoterProxy = artifacts.require("./strategies/StrategyCurveYVoterProxy");


const CONTROLLER_ADDR = '';

module.exports = async function(deployer) {
  deployer.deploy(StrategyProxy);

  const controller = await ControllerInterface.at(CONTROLLER_ADDR);

  deployer.deploy(StrategyCurveYVoterProxy, controller.address);
};
