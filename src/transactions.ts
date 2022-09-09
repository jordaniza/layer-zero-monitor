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
        "0x1266c5327b0a95932c558ba61cd7f64d90c15a522e23f0b08bcbebcfc352c935",
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
