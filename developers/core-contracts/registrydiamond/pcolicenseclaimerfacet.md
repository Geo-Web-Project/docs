---
description: Documentation for the PCOLicenseClaimerFacet contract.
---

# PCOLicenseClaimerFacet

## Summary

The `PCOLicenseClaimerFacet` is the action facet that implements the claiming of new Geo Web Land parcels. This includes both the [Fair Launch ](../../../concepts/fair-launch.md)and ongoing claim types.

Claiming a parcel requires setting a `For Sale Price`, opening the required Network Fee stream, collecting a stream buffer, defining the Coordinate path, and paying a one-time claim payment (during the Fair Launch period).&#x20;

## Code

[`PCOLicenseClaimerFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/PCOLicenseClaimerFacet.sol)&#x20;

[`LibPCOLicensClaimer.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibPCOLicenseClaimer.sol)&#x20;

## Contract Fucntions

### PCOLicenseClaimerFacet

#### ParcelClaimed

```
event ParcelClaimed(uint256 _licenseId, address _payer)
```

Emitted when a parcel is claimed

#### initializeClaimer

```
function initializeClaimer(uint256 auctionStart, uint256 auctionEnd, uint256 startingBid, uint256 endingBid, address beacon) external
```

Initialize. - Must be the contract owner

**Parameters**

| Name         | Type    | Description                                                                                          |
| ------------ | ------- | ---------------------------------------------------------------------------------------------------- |
| auctionStart | uint256 | start time of the genesis land parcel auction.                                                       |
| auctionEnd   | uint256 | when the required bid amount reaches its minimum value.                                              |
| startingBid  | uint256 | start price of the genesis land auction. Decreases to endingBid between auctionStart and auctionEnd. |
| endingBid    | uint256 | the final/minimum required bid reached and maintained at the end of the auction.                     |
| beacon       | address | The beacon contract for PCO licenses                                                                 |

#### setStartingBid

```
function setStartingBid(uint256 startingBid) external
```

Admin can update the starting bid.

**Parameters**

| Name        | Type    | Description          |
| ----------- | ------- | -------------------- |
| startingBid | uint256 | The new starting bid |

#### getStartingBid

```
function getStartingBid() external view returns (uint256)
```

Starting bid

#### setEndingBid

```
function setEndingBid(uint256 endingBid) external
```

Admin can update the ending bid.

**Parameters**

| Name      | Type    | Description        |
| --------- | ------- | ------------------ |
| endingBid | uint256 | The new ending bid |

#### getEndingBid

```
function getEndingBid() external view returns (uint256)
```

Ending bid

#### setAuctionStart

```
function setAuctionStart(uint256 auctionStart) external
```

Admin can update the start time of the initial Dutch auction.

**Parameters**

| Name         | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| auctionStart | uint256 | The new start time of the initial Dutch auction |

#### getAuctionStart

```
function getAuctionStart() external view returns (uint256)
```

Auction start

#### setAuctionEnd

```
function setAuctionEnd(uint256 auctionEnd) external
```

Admin can update the end time of the initial Dutch auction.

**Parameters**

| Name       | Type    | Description                                   |
| ---------- | ------- | --------------------------------------------- |
| auctionEnd | uint256 | The new end time of the initial Dutch auction |

#### getAuctionEnd

```
function getAuctionEnd() external view returns (uint256)
```

Auction end

#### setBeacon

```
function setBeacon(address beacon) external
```

Admin can update the beacon contract

**Parameters**

| Name   | Type    | Description             |
| ------ | ------- | ----------------------- |
| beacon | address | The new beacon contract |

#### getBeacon

```
function getBeacon() external view returns (address)
```

Get Beacon

#### requiredBid

```
function requiredBid() external view returns (uint256)
```

The current dutch auction price of a parcel.

#### getBeaconProxy

```
function getBeaconProxy(uint256 licenseId) external view returns (address)
```

Get beacon proxy for license

**Parameters**

| Name      | Type    | Description |
| --------- | ------- | ----------- |
| licenseId | uint256 | License ID  |

#### getNextProxyAddress

```
function getNextProxyAddress(address user) external view returns (address)
```

Get the next proxy address for user. To be used to grant permissions before calling claim

**Parameters**

| Name | Type    | Description  |
| ---- | ------- | ------------ |
| user | address | User address |

#### claim

```
function claim(int96 initialContributionRate, uint256 initialForSalePrice, uint64 baseCoordinate, uint256[] path) external
```

Claim a new parcel and license - Must have ERC-20 approval of payment token - To-be-created contract must have create flow permissions for bidder. See getNextProxyAddress

**Parameters**

| Name                    | Type       | Description                         |
| ----------------------- | ---------- | ----------------------------------- |
| initialContributionRate | int96      | Initial contribution rate of parcel |
| initialForSalePrice     | uint256    | Initial for sale price of parcel    |
| baseCoordinate          | uint64     | Base coordinate of new parcel       |
| path                    | uint256\[] | Path of new parcel                  |

### LibPCOLicenseClaimer

#### STORAGE\_POSITION

```
bytes32 STORAGE_POSITION
```

#### DiamondStorage

```
struct DiamondStorage {
  uint256 auctionStart;
  uint256 auctionEnd;
  uint256 startingBid;
  uint256 endingBid;
  address beacon;
  mapping(uint256 => address) beaconProxies;
  mapping(address => uint256) userSalts;
}
```

#### diamondStorage

```
function diamondStorage() internal pure returns (struct LibPCOLicenseClaimer.DiamondStorage ds)
```

#### \_buildAndMint

```
function _buildAndMint(address user, uint64 baseCoordinate, uint256[] path) internal
```

Build a parcel and mint a license

**Parameters**

| Name           | Type       | Description                        |
| -------------- | ---------- | ---------------------------------- |
| user           | address    | Address of license owner to be     |
| baseCoordinate | uint64     | Base coordinate of parcel to claim |
| path           | uint256\[] | Path of parcel to claim            |

#### \_requiredBid

```
function _requiredBid() internal view returns (uint256)
```

the current dutch auction price of a parcel.
