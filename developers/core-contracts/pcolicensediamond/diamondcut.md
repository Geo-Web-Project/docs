---
description: Documentation for the DiamondCut contract.
---

# DiamondCut

## Summary

The `DiamondCut` facet establishes the global mapping of facets (currently the [`CFABasePCOFacet`](../beacondiamond/cfabasepcofacet.md), [`CFAPenaltyBidFacet`](../beacondiamond/cfapenaltybidfacet.md), & [`CFAReclaimerFacet`](../beacondiamond/cfareclaimerfacet.md)) to be used by all instances of [`BeaconDiamond`](../beacondiamond/) contract.&#x20;

These contracts use a hybrid [Diamonds](../standards-and-protocols/diamonds-multi-facet-proxy-eip-2535.md)-[Beacon Proxy](../standards-and-protocols/beacon-proxy.md) architecture to maintain the extensibility of land market operations even as each land parcel requires a separate contract instance.

