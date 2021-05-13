const Migrations = artifacts.require("contract-master");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
