---
description: Documentation for the DiamondCut contract.
---

# DiamondCut

## Summary

The `DiamondCut` facet establishes the global mapping of facets (currently the [`CFABasePCOFacet`](../cfabasepcofacet.md), [`CFAPenaltyBidFacet`](../cfapenaltybidfacet.md), & [`CFAReclaimerFacet`](../cfareclaimerfacet.md)) to be used by all instances of [`BeaconDiamond`](../beacondiamond.md) contract.&#x20;

These contracts use a hybrid [Diamonds](../standards-and-protocols/diamonds-multi-facet-proxy-eip-2535.md)-[Beacon Proxy](../standards-and-protocols/beacon-proxy.md) architecture to maintain the extensibility of land market operations even as each land parcel requires a separate contract instance.

## Code

The Geo Web's `DiamondCut.sol` contract is an implementation of the [`DiamondCutFacet.sol`](https://github.com/wighawag/hardhat-deploy/blob/master/solc\_0.8/diamond/facets/DiamondCutFacet.sol) template.&#x20;

It's pulled in at deployment through the [hardhat-deploy plug-in](https://github.com/wighawag/hardhat-deploy).
