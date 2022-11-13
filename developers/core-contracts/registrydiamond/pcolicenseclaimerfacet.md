---
description: Documentation for the PCOLicenseClaimerFacetV2 contract.
---

# PCOLicenseClaimerFacet

## Summary

The `PCOLicenseClaimerFacet` is the action facet that implements the claiming of new Geo Web Land parcels. This includes both the [Fair Launch ](../../../concepts/fair-launch.md)and ongoing claim types.

Claiming a parcel requires setting a `For Sale Price`, opening the required Network Fee stream, collecting a stream buffer, defining the shape, and paying a one-time claim payment (during the Fair Launch period).&#x20;

## Code

[`PCOLicenseClaimerFacetV2.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/PCOLicenseClaimerFacetV2.sol)&#x20;

[`LibPCOLicenseClaimer.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibPCOLicenseClaimer.sol)&#x20;

## Contract Functions

### PCOLicenseClaimerFacetV2

#### \_buildAndMint

```solidity
function _buildAndMint(address user, struct LibGeoWebParcelV2.LandParcel parcel) internal
```

Build a parcel and mint a license

**Parameters**

| Name   | Type                                | Description                    |
| ------ | ----------------------------------- | ------------------------------ |
| user   | address                             | Address of license owner to be |
| parcel | struct LibGeoWebParcelV2.LandParcel | New parcel                     |



### LibPCOLicenseClaimer

#### STORAGE\_POSITION

```solidity
bytes32 STORAGE_POSITION
```

#### DiamondStorage

```solidity
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

```solidity
function diamondStorage() internal pure returns (struct LibPCOLicenseClaimer.DiamondStorage ds)
```

#### \_requiredBid

```solidity
function _requiredBid() internal view returns (uint256)
```

the current dutch auction price of a parcel.
