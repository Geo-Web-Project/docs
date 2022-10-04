---
description: Documentation of the LibGeoWebCoordinate & LibGeoWebCoordinatePath contracts
---

# Coordinates & Paths

### Summary

The Geo Web Coordinate library defines the Geo Web's fixed global grid and coordinate system. It is the basis for the spatial definition of all [Geo Web land parcels](../../../../concepts/digital-land.md).

The system's grid lines create rectangular areas referred to as Geo Web Coordinates. Each Geo Web land parcel is an array of Geo Web Coordinates.

![A single Geo Web Coordinate (yellow rectangle) on the Kovan testnet](<../../../../.gitbook/assets/Geo Web Coordinate.png>)

In the testnet implementation, a larger grid size was used for more practical large land claims. Mainnet will use a grid size that balances transaction fees/size with enabling faithful representation of existing real world property lines.

The [GeoWebParcelFacet](./) uses the library defined in Geo Web Coordinate to traverse parcel paths and map coordinates to the word index.

### Code

[`LibGeoWebCoordinate.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibGeoWebCoordinate.sol)

## Contract Functions

### LibGeoWebCoordinate

#### MAX\_X

```
uint64 MAX_X
```

#### MAX\_Y

```
uint64 MAX_Y
```

#### traverse

```
function traverse(uint64 origin, uint256 direction, uint256 iX, uint256 iY, uint256 i) external pure returns (uint64, uint256, uint256, uint256)
```

Traverse a single direction

**Parameters**

| Name      | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| origin    | uint64  | The origin coordinate to start from |
| direction | uint256 | The direction to take               |
| iX        | uint256 |                                     |
| iY        | uint256 |                                     |
| i         | uint256 |                                     |

**Return Values**

| Name | Type    | Description                            |
| ---- | ------- | -------------------------------------- |
| \[0] | uint64  | destination The destination coordinate |
| \[1] | uint256 |                                        |
| \[2] | uint256 |                                        |
| \[3] | uint256 |                                        |

#### \_traverse

```
function _traverse(uint64 origin, uint256 direction, uint256 iX, uint256 iY, uint256 i) internal pure returns (uint64, uint256, uint256, uint256)
```

#### \_getX

```
function _getX(uint64 coord) internal pure returns (uint64 coordX)
```

Get the X coordinate

#### \_getY

```
function _getY(uint64 coord) internal pure returns (uint64 coordY)
```

Get the Y coordinate

#### toWordIndex

```
function toWordIndex(uint64 coord) external pure returns (uint256 iX, uint256 iY, uint256 i)
```

Convert coordinate to word index

#### \_toWordIndex

```
function _toWordIndex(uint64 coord) internal pure returns (uint256 iX, uint256 iY, uint256 i)
```

### LibGeoWebCoordinatePath

LibGeoWebCoordinatePath stores a path of directions in a uint256. The most significant 8 bits encodes the length of the path

#### INNER\_PATH\_MASK

```
uint256 INNER_PATH_MASK
```

#### PATH\_SEGMENT\_MASK

```
uint256 PATH_SEGMENT_MASK
```

#### nextDirection

```
function nextDirection(uint256 path) external pure returns (bool hasNext, uint256 direction, uint256 nextPath)
```

Get next direction from path

**Parameters**

| Name | Type    | Description                        |
| ---- | ------- | ---------------------------------- |
| path | uint256 | The path to get the direction from |

**Return Values**

| Name      | Type    | Description                                     |
| --------- | ------- | ----------------------------------------------- |
| hasNext   | bool    | If the path has a next direction                |
| direction | uint256 | The next direction taken from path              |
| nextPath  | uint256 | The next path with the direction popped from it |

#### \_nextDirection

```
function _nextDirection(uint256 path) internal pure returns (bool hasNext, uint256 direction, uint256 nextPath)
```
