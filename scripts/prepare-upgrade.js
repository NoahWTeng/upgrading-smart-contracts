// scripts/prepare_upgrade.js
async function main() {
  const proxyAddress = "0xC1bD33B909568bBcA639aB8c2d0b5814c7F6eb04";
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Preparing upgrade...");
  const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
  console.log("BoxV2 at:", boxV2Address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
