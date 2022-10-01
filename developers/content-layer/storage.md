---
description: >-
  Long-term data availability requires a separate solution from data transfer
  (IPFS) and content linking (Ceramic) on the Geo Web. That's where file storage
  solutions like Filecoin come in.
---

# Persistence & Storage

Neither IPFS nor Ceramic protocols guarantee data availability. Because content is found by what it is rather than where it is, no one is explicitly responsible for storing the data on these networks.&#x20;

With popular content that is naturally replicated across many connected nodes, this may not be an issue. That's not an adequate global assumption for Geo Web content to be reliably resolvable though.

Luckily there are many diverse (p2p) options for content storage that the Geo Web can and does integrate with.

[Pinning](https://docs.ipfs.io/concepts/persistence/#pinning-in-context) is a concept native to IPFS. Content pinned in a IPFS node is protected from garbage collection (automatic clean-up/deletion of unused content). As long as the node remains online and content remains pinned, the content persists on the IPFS network.&#x20;

For the average individual user, keeping their own node online at all times and pinning all of their content is impractical. This is why there are a number of pinning services (that run lots of reliable, redundant IPFS nodes) available in the IPFS ecosystem including [Pinata](https://www.pinata.cloud/), [Textile](https://www.textile.io/), and [Estuary](https://estuary.tech/).

The [Cadastre](../../concepts/cadastre-intro.md) integrates with these 3rd-party services using the [IPFS Pinning Service API](https://ipfs.github.io/pinning-services-api-spec/) to provide long-term storage options for linked content.

![The Cadastre Media Gallery editor with content pinning integration ](<../../.gitbook/assets/Media Gallery Pinning.png>)

The Cadastre's current default storage integration is with [web3.storage](https://web3.storage/), but we eventually allow publishers to connect to alternative pinning services (by entering their own API credentials).

{% hint style="info" %}
Note: The parcel linking metadata found in Streams is different than the linked content itself. Both need to be persisted for proper content resolution on the Geo Web.

3Box Labs, the developer of Ceramic, currently runs a free hosted service for Ceramic nodes on their mainnet. The Geo Web Cadastre is able to automatically request that all Stream updates be pinned through this service.

As the Ceramic network is progressively decentralized, the Geo Web may choose to run or subsidize additional Ceramic nodes used for pinning parcel metadata.&#x20;
{% endhint %}

The Geo Web-web3.storage integration is both convenient and powerful. Each Geo Web land licensor is allocated this free storage without requiring any extra account creation or credentials.

In addition to providing IPFS pinning (think of it as hot storage), web3.storage offers [Filecoin](https://filecoin.io/) archiving (cold storage). Filecoin is a decentralized storage network and the companion project of IPFS. It uses economic incentives (i.e., a token called FIL) and cryptography to create redundant, verifiable p2p storage.

\---

Check out [web3.storage](https://web3.storage/docs/) and [Filecoin](https://docs.filecoin.io/)'s developer documentation for detailed information about their offerings.
