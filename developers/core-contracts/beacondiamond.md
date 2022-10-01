---
description: Documentation for the BeaconDiamond contract.
---

# BeaconDiamond

## Summary

`BeaconDimaond` is a facade contract for ongoing land market operations. There is a separate instance of the contract for each Geo Web land parcel.

It `delegatecall`s to the [`CFABasePCOFacet`](cfabasepcofacet.md), [`CFAPenaltyBidFacet`](cfapenaltybidfacet.md), and [`CFAReclaimerFacets`](cfareclaimerfacet.md) based on the mapping provided in the [`DiamondCut`](pcolicensebeacon/diamondcut.md).&#x20;

This hybrid [Diamonds](standards-and-protocols/diamonds-multi-facet-proxy-eip-2535.md)-[Beacon Proxy](standards-and-protocols/beacon-proxy.md) architecture maintains extensibility by allowing a single update transaction to the `PCOLicenseBeacon` to propagate to all land parcels.

Separate instances of this contract for each land parcel (along with [Superfluid Access Control List functionality](https://docs.superfluid.finance/superfluid/developers/constant-flow-agreement-cfa/cfa-access-control-list-acl) in the downstream facets) is required to maintain distinct network fee payment streams per parcel.

## Code

[`BeaconDiamond.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/beacon-diamond/BeaconDiamond.sol)&#x20;

[`LibBeaconDiamond.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/beacon-diamond/libraries/LibBeaconDiamond.sol)&#x20;

## Reference Documentation

Coming soon
