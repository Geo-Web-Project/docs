---
description: Documentation for the CFAReclaimerFacet contract.
---

# CFAReclaimerFacet

## Summary

The `CFAReclaimerdFacet` implements the functions that define the Geo Web's foreclosure system.

This includes a 7-day Dutch auction which is initiated when a parcel's Network Fee stream runs dry or is canceled. This auction starts at the previous `For Sale Price` and lineraly decreases to 0 over the auction period.&#x20;

The previous licensor can reclaim their parcel by setting a `For Sale Price` and opening the corresponding `Network Fee` stream. Other land market participants can assume control of the parcel by paying the previous licensor the current auction price and establishing their own `For Sale Price` and payment stream.

## Code

[`CFAReclaimerFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/facets/CFAReclaimerFacet.sol)

## Contract Functions

### CFAReclaimerFacet

Handles reclaiming of licenses that are no longer active

#### LicenseReclaimed

```solidity
event LicenseReclaimed(address to, uint256 price)
```

Emitted when a license is reclaimed

#### reclaimPrice

```solidity
function reclaimPrice() public view returns (uint256)
```

Current price to reclaim

#### reclaim

```solidity
function reclaim(uint256 maxClaimPrice, int96 newContributionRate, uint256 newForSalePrice) external
```

Reclaim an inactive license as msg.sender - Payer bid must be inactive - Must have permissions to create flow for bidder - Must have ERC-20 approval of payment token for claimPrice amount

**Parameters**

| Name                | Type    | Description                                                                        |
| ------------------- | ------- | ---------------------------------------------------------------------------------- |
| maxClaimPrice       | uint256 | Max price willing to pay for claim. Prevents front-running                         |
| newContributionRate | int96   | New contribution rate for license                                                  |
| newForSalePrice     | uint256 | Intented new for sale price. Must be within rounding bounds of newContributionRate |
