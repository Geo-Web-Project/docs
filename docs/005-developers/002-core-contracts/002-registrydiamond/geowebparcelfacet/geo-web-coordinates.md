---
description: Documentation of the LibGeoWebCoordinateV2 contract
---

# Coordinates

### Summary

The Geo Web Coordinate library defines the Geo Web's fixed global grid and coordinate system. It is the basis for the spatial definition of all [Geo Web land parcels](../../../../concepts/digital-land.md).

The system's grid lines create rectangular areas referred to as Geo Web Coordinates. Each of these Coordinates is uniquely identified and stored with an EVM-optimized method as 1 bit (0=available, 1=claimed). This provides a scalable, on-chain way to ensure that no two parcels overlap (i.e. all Coordinates in a new claim are unclaimed) even as the number of claimed parcels grows into the millions.

![A single Geo Web Coordinate (yellow rectangle) on testnet](/assets/geo-web-coordinate.png)

In the testnet implementation, a larger grid size was used for more practical large land claims. Mainnet uses a smaller grid size that balances transaction fees/size with enabling faithful representation of existing physical-world property lines (\~20m$$^2$$ around the equator). This grid may be further divided for more precision or migrated to a system that allows arbitrary polygon definition at a later date.

### Code

[`LibGeoWebCoordinate.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibGeoWebCoordinate.sol)

[`LibGeoWebCoordinateV2.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibGeoWebParcelV2.sol)

## Contract Functions

### LibGeoWebCoordinateV2

#### MAX_X

```solidity
uint64 MAX_X
```

#### MAX_Y

```solidity
uint64 MAX_Y
```

#### traverse

```solidity
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

```solidity
function _traverse(uint64 origin, uint256 direction, uint256 iX, uint256 iY, uint256 i) internal pure returns (uint64, uint256, uint256, uint256)
```

#### \_getX

```solidity
function _getX(uint64 coord) internal pure returns (uint64 coordX)
```

Get the X coordinate

#### \_getY

```solidity
function _getY(uint64 coord) internal pure returns (uint64 coordY)
```

Get the Y coordinate

#### toWordIndex

```solidity
function toWordIndex(uint64 coord) external pure returns (uint256 iX, uint256 iY, uint256 i)
```

Convert coordinate to word index

#### \_toWordIndex

```solidity
function _toWordIndex(uint64 coord) internal pure returns (uint256 iX, uint256 iY, uint256 i)
```
