---
description: Documentation for the DiamondCut contract.
---

# DiamondCut

## Summary

The `DiamondCut` facet establishes the global mapping of facets (currently the [`CFABasePCOFacet`](../beacondiamond/cfabasepcofacet), [`CFAPenaltyBidFacet`](../beacondiamond/cfapenaltybidfacet), & [`CFAReclaimerFacet`](../beacondiamond/cfareclaimerfacet)) to be used by all instances of [`BeaconDiamond`](../beacondiamond/) contract.&#x20;

These contracts use a hybrid [Diamonds](../standards-and-protocols/diamonds-multi-facet-proxy-eip-2535)-[Beacon Proxy](../standards-and-protocols/beacon-proxy) architecture to maintain the extensibility of land market operations even as each land parcel requires a separate contract instance.

## Code

The Geo Web's `DiamondCut.sol` contract is an implementation of SolidSate's [`DiamondWritable.sol`](https://github.com/solidstate-network/solidstate-solidity/blob/master/contracts/proxy/diamond/writable/DiamondWritable.sol) contract.
