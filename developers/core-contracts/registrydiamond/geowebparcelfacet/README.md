---
description: Documentation for the GeoWebParcelFacet contract.
---

# GeoWebParcelFacet

## Summary

The `GeoWebParcelFacet` contract extends the [basic ERC-721 functionality](../erc721facet.md) to the Geo Web-specific requirements that define a land parcel: shape, contiguousness, and uniqueness.

This is done with an EVM-optimized global grid system. Grid cells are called Geo Web Coordinates. Each coordinate represents a unique \~10m$$^2$$ space on Earth.&#x20;

Coordinates can only be part of one parcel at any one time (merging, splitting, and trimming parcels will be implemented at a later date).

Parcels are defined as a continuous path of coordinates (e.g. starting coordinate plus a list of traversal steps without repeats).

The `GeoWebParcelFacet` defines these functions while the state is held in the [`RegistryDiamond`](../).

## Code

[`GeoWebParcelFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/GeoWebParcelFacet.sol)

[`LibGeoWebParcel.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibGeoWebParcel.sol)

## Contract Functions

### GeoWebParcelFacet

#### availabilityIndex

```
function availabilityIndex(uint256 x, uint256 y) external view returns (uint256)
```

Get availability index for coordinates

**Parameters**

| Name | Type    | Description  |
| ---- | ------- | ------------ |
| x    | uint256 | X coordinate |
| y    | uint256 | Y coordinate |

#### getLandParcel

```
function getLandParcel(uint256 id) external view returns (uint64 baseCoordinate, uint256[] path)
```

Get a land parcel

**Parameters**

| Name | Type    | Description       |
| ---- | ------- | ----------------- |
| id   | uint256 | ID of land parcel |

### LibGeoWebParcel

#### STORAGE\_POSITION

```
bytes32 STORAGE_POSITION
```

#### LandParcel

```
struct LandParcel {
  uint64 baseCoordinate;
  uint256[] path;
}
```

#### Action

```
enum Action {
  Build,
  Destroy,
  Check
}
```

#### MAX\_INT

```
uint256 MAX_INT
```

_Maxmium uint256 stored as a constant to use for masking_

#### ParcelBuilt

```
event ParcelBuilt(uint256 _id)
```

Emitted when a parcel is built

#### ParcelDestroyed

```
event ParcelDestroyed(uint256 _id)
```

Emitted when a parcel is destroyed

#### ParcelModified

```
event ParcelModified(uint256 _id)
```

Emitted when a parcel is modified

#### DiamondStorage

```
struct DiamondStorage {
  mapping(uint256 => mapping(uint256 => uint256)) availabilityIndex;
  mapping(uint256 => struct LibGeoWebParcel.LandParcel) landParcels;
  uint256 nextId;
}
```

#### diamondStorage

```
function diamondStorage() internal pure returns (struct LibGeoWebParcel.DiamondStorage ds)
```

#### build

```
function build(uint64 baseCoordinate, uint256[] path) internal
```

Build a new parcel. All coordinates along the path must be available. All coordinates are marked unavailable after creation.

**Parameters**

| Name           | Type       | Description                   |
| -------------- | ---------- | ----------------------------- |
| baseCoordinate | uint64     | Base coordinate of new parcel |
| path           | uint256\[] | Path of new parcel            |

#### destroy

```
function destroy(uint256 id) internal
```

Destroy an existing parcel. All coordinates along the path are marked as available.

**Parameters**

| Name | Type    | Description       |
| ---- | ------- | ----------------- |
| id   | uint256 | ID of land parcel |

#### nextId

```
function nextId() internal view returns (uint256)
```

The next ID to assign to a parcel

#### \_updateAvailabilityIndex

```
function _updateAvailabilityIndex(enum LibGeoWebParcel.Action action, uint64 baseCoordinate, uint256[] path) private
```

_Update availability index by traversing a path and marking everything as available or unavailable_
