---
description: Documentation for PCOLicenseBeacon.sol
---

# PCOLicenseBeacon.sol

## Summary

The `PCOLicenseBeacon` establishes the current mapping of facets to be used by each individual instance of [`BeaconDiamond`](beacondiamond.sol.md) contract.&#x20;

This pair of contracts uses a hybrid [Diamonds](standards-and-protocols/diamonds-multi-facet-proxy-eip-2535.md)-[Beacon Proxy](standards-and-protocols/beacon-proxy.md) architecture to maintain extensibility of land market operations even as each land parcel requires a separate contract instance.

## Code

The Geo Web's `PCOLicenseBeacon.sol` contract is an implementation of [`Diamond.sol`](https://github.com/wighawag/hardhat-deploy/blob/master/solc\_0.8/diamond/Diamond.sol)

It's pulled in at deployment through the [hardhat-deploy plug-in](https://github.com/wighawag/hardhat-deploy).

