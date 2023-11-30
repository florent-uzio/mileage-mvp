import { ethers } from "hardhat";

async function main() {
  const mileage = await ethers.deployContract("Mileage", [
    "0x3bD2483a3A0DE66075F897FE37D784F26503503E",
  ]);

  await mileage.waitForDeployment();

  console.log(`Mileage deployed to ${mileage.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
