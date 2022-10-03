---
description: Documentation for the PCOLicenseBeacon contract.
---

# PCOLicenseBeacon

## Summary

The `PCOLicenseBeacon` is the facade contract for the [`DiamondCut`](diamondcut.md) facet which is used to define the global facet mapping for all individual instances of [`BeaconDiamond`](../beacondiamond/) contract.&#x20;

These contracts use a hybrid [Diamonds](../standards-and-protocols/diamonds-multi-facet-proxy-eip-2535.md)-[Beacon Proxy](../standards-and-protocols/beacon-proxy.md) architecture to maintain the extensibility of land market operations even as each land parcel requires a separate contract instance.

## Code

The Geo Web's `PCOLicenseBeacon.sol` contract is an implementation of [`Diamond.sol`](https://github.com/wighawag/hardhat-deploy/blob/master/solc\_0.8/diamond/Diamond.sol)that uses the [`DiamondCutFacet.sol`](https://github.com/wighawag/hardhat-deploy/blob/master/solc\_0.8/diamond/facets/DiamondCutFacet.sol), [`DiamondLoupeFacet.sol`](https://github.com/wighawag/hardhat-deploy/blob/master/solc\_0.8/diamond/facets/DiamondLoupeFacet.sol), & [`OwnershipFacet.sol`](https://github.com/wighawag/hardhat-deploy/blob/master/solc\_0.8/diamond/facets/OwnershipFacet.sol) templates.

It's pulled in at deployment through the [hardhat-deploy plug-in](https://github.com/wighawag/hardhat-deploy).

