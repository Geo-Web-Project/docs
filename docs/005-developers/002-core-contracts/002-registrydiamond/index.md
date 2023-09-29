---
description: Documentation for the RegistryDiamond contract.
---

# RegistryDiamond

## Summary

The `RegistryDiamond` is the facade contract that `delegatecall`s the facets that comprise the Geo Web's digital land registry. It holds the state of the digital land registry in contract storage.

The `RegistryDiamond`'s facets are modular, upgradable, and serve distinct purposes:

| Name                                               | Type       | Description                                             |
| -------------------------------------------------- | ---------- | ------------------------------------------------------- |
| [PCOERC721Facet](./erc721facet)                    | Core       | Implements the ERC721 NFT standard                      |
| [GeoWebParcelFacet](geowebparcelfacet/)            | Core       | Defines the rules and structure of Geo Web land parcels |
| [PCOLicenseClaimerFacet](./pcolicenseclaimerfacet) | Action     | Used to claim new Geo Web land parcels                  |
| [PCOLicenseParamsFacet](./pcolicenseparamsfacet)   | Parameters | Sets global parameters for the Geo Web land market      |

## Code

The Geo Web's [`RegistryDiamond.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/RegistryDiamond.sol) contract is an implementation of [`SolidStateDiamond.sol`](https://github.com/solidstate-network/solidstate-solidity/blob/master/contracts/proxy/diamond/SolidStateDiamond.sol).
