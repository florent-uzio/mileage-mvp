import { ethers } from "hardhat";
import path from "path";
import fs from "fs";

async function main() {
  const mileage = await ethers.deployContract("Mileage", [
    "0x3bD2483a3A0DE66075F897FE37D784F26503503E",
  ]);

  await mileage.waitForDeployment();

  console.log(`Mileage deployed to ${mileage.target}`);

  saveFrontendFiles(mileage);
}

function saveFrontendFiles(contract: any) {
  const contractsDir = path.join(
    __dirname,
    "../..",
    "frontend",
    "src",
    "contracts"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  const typechainDir = path.join(__dirname, "..", "typechain-types");
  fs.cpSync(typechainDir, contractsDir, { recursive: true });
  console.log("Copied content of typechain-types into frontend directory");

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ address: contract.target }, undefined, 2)
  );
  console.log(
    "Contract address written in contract-address.json in the frontend"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
