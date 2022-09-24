---
description: A standard used to create modular, extensible smart contract systems.
---

# Diamonds, Multi-Facet Proxy (EIP-2535)

[Diamonds Multi-Facet Proxy](https://eips.ethereum.org/EIPS/eip-2535) is the most prominent pattern leveraged in the Geo Web's core contracts.&#x20;

It creates modularity throughout the Geo Web's digital land NFT registry and market operations. The contracts that define parcel shapes, auction rules, and even the entire [PCO](../../../concepts/partial-common-ownership.md) system can be swapped with replacements if appropriate.

{% hint style="info" %}
The complete specification of the EIP-2535 - Diamonds, Multi-Facet Proxy standard can be found at [https://eips.ethereum.org/EIPS/eip-2535](https://eips.ethereum.org/EIPS/eip-2535).
{% endhint %}

The basic pattern uses two types of contracts:

1. Diamonds - facade contracts that `delegatecall`s into its facets to execute function calls
2. Facets - contracts with one or more functions to be called from a diamond

As the imagery of the terminology would suggest, facets define the shape (functionality) of individual pieces while the diamond can be thought of as the arrangement of those pieces into a cohesive system.&#x20;

Unlike real with real diamonds, facet contracts can be (optionally) upgraded. Diamonds and facets can also be made immutable upon launch or at a later date while the pattern still provides benefits of organized contract code/data and limiting individual contract size.

