---
description: IPFS is a peer-to-peer hypermedia protocol. It's a web3 alternative to HTTP.
---

# IPFS

[IPFS](https://docs.ipfs.io/concepts/what-is-ipfs/) is a peer-to-peer (p2p) content storage and retrieval system. It utilizes [content addressing](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats) (identifying content by what it is) rather than location addressing (identifying content by where it is) to organize files on its network.&#x20;

The Geo Web utilizes IPFS as the basis for its open, censorship resistant, resilient, and efficient content layer. Linked media on the Geo Web are essentially geo-anchored IPFS files.\


![A depiction of the advantages of a p2p content layer for geo-anchored content](<../../.gitbook/assets/Client-Server vs P2P.png>)

Geo Web users seeking the same content will for the most part be geographically clustered. This is an optimal environment for p2p transmission: reduced search radius for peers, shorter transmission distance, and network redundancy. As media on the Geo Web grows in volume and fidelity (especially with augmented reality), leveraging p2p transmission could significantly improve performance and network scalability.

{% hint style="success" %}
Users can trust the authenticity of a requested file on IPFS regardless of who it is served by because every file gets a unique content identifier (CID) generated through a cryptographic hashing algorithm. Identical files will always produce identical CIDs when run through a hashing function. But, changing just one pixel (or, more dramatically, trying to insert anything malicious) in a file will always result in a completely different CID. A CID is easily verified and can’t be faked, so a file identified with a CID is always what it says it is.
{% endhint %}

The [Cadastre](../../concepts/cadastre-intro.md)'s current publishing tools enable uploads digital content to the IPFS network via a IPFS node running in the browser. Uploaded content is hashed to produce its CID and remote "preload" nodes provide temporary persistence of content that isn't [pinned with another service](storage.md) before the web page is closed.

![Uploading a 3D model of a Astronaut to IPFS on the Cadastre](<../../.gitbook/assets/Content Upload.png>)

\---

Check out [IPFS's official documentation](https://docs.ipfs.io/) to learn more.
