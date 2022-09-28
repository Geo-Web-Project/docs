---
description: Documentation for the RegistryDiamond contract.
---

# RegistryDiamond

## Summary

The `RegistryDiamond` is the facade contract that `delegatecall`s the facets that comprise the Geo Web's digital land registry. It holds the state of the digital land registry in contract storage.

The `RegistryDiamond`'s facets are modular, upgradable, and serve distinct purposes:

| Name                                                | Type        | Description                                             |
| --------------------------------------------------- | ----------- | ------------------------------------------------------- |
| [ERC721Facet](erc721facet.md)                       | Core        | Implements the ERC721 NFT standard                      |
| [GeoWebParcelFacet](geowebparcelfacet/)             | Core        | Defines the rules and structure of Geo Web land parcels |
| [PCOLicenseClaimerFacet](pcolicenseclaimerfacet.md) | Action      | Used to claim new Geo Web land parcels                  |
| [PCOLicenseParamsFacet](pcolicenseparamsfacet.md)   | Parameters  | Sets global parameters for the Geo Web land market      |

## Code

The Geo Web's `RegistryDiamond.sol` contract is an implementation of [`Diamond.sol`](https://github.com/wighawag/hardhat-deploy/blob/master/solc\_0.8/diamond/Diamond.sol)

It's pulled in at deployment through the [hardhat-deploy plug-in](https://github.com/wighawag/hardhat-deploy).
