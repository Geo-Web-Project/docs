---
description: Documentation for the PCOLicenseDiamond contract.
---

# PCOLicenseDiamond

## Summary

The `PCOLicenseDiamond` is the facade contract for the [`DiamondCut`](./diamondcut) facet which is used to define the global facet mapping for all individual instances of [`BeaconDiamond`](../beacondiamond/) contract.&#x20;

These contracts use a hybrid [Diamonds](../standards-and-protocols/diamonds-multi-facet-proxy-eip-2535)-[Beacon Proxy](../standards-and-protocols/beacon-proxy) architecture to maintain the extensibility of land market operations even as each land parcel requires a separate contract instance.

## Code

The Geo Web's [`PCOLicenseDiamond.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/PCOLicenseDiamond.sol) contract is an implementation of [`SolidStateDiamond.sol`](https://github.com/solidstate-network/solidstate-solidity/blob/master/contracts/proxy/diamond/SolidStateDiamond.sol).
