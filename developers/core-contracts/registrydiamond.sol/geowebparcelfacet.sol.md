---
description: Documentation for GeoWebParcelFacet.sol
---

# GeoWebParcelFacet.sol

## Summary

The `GeoWebParcelFacet` contract extends the [basic ERC-721 functionality](erc721facet.md) to the Geo Web-specific requirements that define a land parcel: shape, contiguousness, and uniqueness.

This is done with an EVM-optimized global grid system. Grid cells are called Geo Web Coordinates. Each coordinate represents a unique \~10m$$^2$$ space on Earth.&#x20;

Coordinates can only be part of one parcel at any one time (merging, splitting, and trimming parcels will be implemented at a later date).

Parcels are defined as a continuous path of coordinates (e.g. starting coordinate plus a list of traversal steps without repeats).

The `GeoWebParcelFacet` defines these functions while the state is held in the [`RegistryDiamond`](./).

## Code

[`GeoWebParcelFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/GeoWebParcelFacet.sol)

## Reference Documentation

Coming soon
