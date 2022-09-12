export const TRANSACTIONS = {
  main: [
    {
      network: "MATIC",
      hashes: [
        "0xe6f5b1df86275690dfbe5d53b53f87f202b36bbb495cc85491c809963e85f3d1",
      ],
    },
  ],
  test: [
    {
      network: "FTM",
      hashes: [
        "0x6346d4e31e2e355ceb18bbb6222f668a8b1ab5c8251f34244af41dc7688f62f0",
      ],
    },
    {
      network: "AVAX",
      hashes: [
        "0x8b3190718362d187db7d962e17df81372dcac11af9cef2739cdeb51e6f6308bb",
      ],
    },
  ],
};

// Helpers
export const getHashForNetwork = (network: string, mainnet = true, id = 0) => {
  const blockchain = TRANSACTIONS[mainnet ? "main" : "test"].find(
    (i) => i.network === network
  );

  if (!blockchain) throw new Error("Failed to find network");

  return blockchain.hashes[id];
};
