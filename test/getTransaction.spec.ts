import { createClient } from "@layerzerolabs/scan-client";
import { getHashForNetwork } from "../src/transactions";

describe("Testing the layerZero client", () => {
  // it("Fetches a transaction on mainnet", async () => {
  //   const client = createClient("mainnet");
  //   const txId = getHashForNetwork("MATIC");

  //   const transaction = await client.getMessagesBySrcTxHash(txId);

  //   console.log(transaction.messages);

  //   expect(transaction.messages.length).toBeGreaterThan(0);
  // });

  // it("Fetches a transaction on testnet", async () => {
  //   const client = createClient("testnet");
  //   const txId = getHashForNetwork("FTM", false);

  //   const transaction = await client.getMessagesBySrcTxHash(txId);

  //   console.log(transaction.messages);

  //   expect(transaction.messages.length).toBeGreaterThan(0);
  // });

  it("Checking the AVAX tx", async () => {
    const client = createClient("testnet");
    const txId = getHashForNetwork("AVAX", false);

    const transaction = await client.getMessagesBySrcTxHash(txId);

    console.log(transaction.messages);

    expect(transaction.messages.length).toBeGreaterThan(0);
  });
});
