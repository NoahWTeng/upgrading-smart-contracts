async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  let box = await upgrades.upgradeProxy(
    "0xC1bD33B909568bBcA639aB8c2d0b5814c7F6eb04",
    BoxV2
  );
  console.log("Your upgraded proxy is done!", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
