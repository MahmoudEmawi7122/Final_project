const Marketplace = artifacts.require("Marketplace");

export default function(deployer) {
  deployer.deploy(Marketplace);
};