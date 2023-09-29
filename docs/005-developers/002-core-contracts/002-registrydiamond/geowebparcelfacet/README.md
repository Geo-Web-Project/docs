---
description: Documentation for the GeoWebParcelFacetV2 contract.
---

# GeoWebParcelFacet

## Summary

The `GeoWebParcelFacet` contract extends the [basic ERC-721 functionality](../erc721facet.md) to the Geo Web-specific requirements that define a land parcel: shape, contiguousness, and uniqueness.

This is done with an [EVM-optimized global grid system](geo-web-coordinates.md). Grid cells are called Geo Web Coordinates. Each coordinate represents a unique \~20m$$^2$$ space on Earth.&#x20;

Coordinates can only be part of one parcel at any one time (merging, splitting, and trimming parcels will be implemented at a later date).

Each Geo Web land parcel is defined by its southwestmost Coordinate plus its longitude and latitude dimensions (maximum 200 coordinates in each direction and 3,000 for the total area). This means that for now, all parcels are rectangles.

These limitations were implemented for performance, land market efficiency, and migratability reasons. Eventually, parcels may be defined with arbitrary polygons.

The `GeoWebParcelFacet` defines these functions while the state is held in the [`RegistryDiamond`](../).

## Code

[`GeoWebParcelFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/GeoWebParcelFacet.sol)

[`LibGeoWebParcel.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibGeoWebParcel.sol)

## Contract Functions

### GeoWebParcelFacet

#### availabilityIndex

```solidity
function availabilityIndex(uint256 x, uint256 y) external view returns (uint256)
```

Get availability index for coordinates

**Parameters**

| Name | Type    | Description  |
| ---- | ------- | ------------ |
| x    | uint256 | X coordinate |
| y    | uint256 | Y coordinate |

#### getLandParcel

```solidity
function getLandParcel(uint256 id) external view returns (uint64 baseCoordinate, uint256[] path)
```

Get a land parcel

**Parameters**

| Name | Type    | Description       |
| ---- | ------- | ----------------- |
| id   | uint256 | ID of land parcel |

### GeoWebParcelFacetV2

#### getLandParcelV2

```solidity
function getLandParcelV2(uint256 id) external view returns (uint64 swCoordinate, uint256 latDim, uint256 lngDim)
```

Get a V2 land parcel

**Parameters**

| Name | Type    | Description       |
| ---- | ------- | ----------------- |
| id   | uint256 | ID of land parcel |
