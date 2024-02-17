---
description: >-
  The Geo Web is envisioned as a permissionless peer-to-peer network. The current
  implementation uses the MUD framework to maintain the content layer state onchain & IPFS/Filecoin for additional media storage and retrieval .
---

# Content Layer

The core protocols of the internet and web were designed to enable peer-to-peer (p2p) communication, but client-server architectures still dominate today. Many of the biggest issues of Web 2.0 (winner-take-all economics, the attention economy, and censorship) can be traced back to the dynamics created by this architecture. For the Geo Web to fulfill its promise as a permissionless, egalitarian network, its full stack must be and remain decentralized.

We've experimented with numerous non-blockchain p2p architectures to these aims, but with reductions in transaction fees/storage cost (L2s, [EIP-4844](https://www.eip4844.com/)) and improved tooling for ambitious applications we are actively transitioning the default Geo Web content layer onchain with [MUD](./MUD). [IPFS](./ipfs) and [Filecoin](./storage) offer complementary large media p2p file storage and retrieval.
