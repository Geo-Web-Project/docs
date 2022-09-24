---
description: Documentation for ERC721Facet.sol
---

# ERC721Facet.sol

## Summary

The `ERC721Facet` contract implements the [ERC-721 Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721) for Geo Web land parcels.&#x20;

ERC-721 functions reside in this facet, but the state is held in the [`RegistryDiamond`](./) (per the [Diamonds specification](https://eips.ethereum.org/EIPS/eip-2535)).&#x20;

This facet "isn't aware" of the additional functionality in other facets used to implement land parcel definition or the partial common ownership ruleset.

## Code

[`ERC721Facet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/ERC721Facet.sol)

## Reference Documentation

Coming soon
