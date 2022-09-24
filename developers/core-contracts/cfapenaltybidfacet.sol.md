---
description: Documentation for CFAPenaltyBidFacet.sol
---

# CFAPenaltyBidFacet.sol

## Summary

The `CFAPenaltyBidFacet` implements the functions that define the Geo Web's auction system.&#x20;

The Geo Web introduces an "owner-forgiving" auction mechanism instead of a "pure" partial commmon ownership/Harberger tax system that would implement instantaneous transfers of assets upon an incoming (higher) bid.&#x20;

`CFAPenaltyBidFacet` gives the current licensor an exclusive window to reject or accept a rival bid. To reject a bid, the licensor must pay a percentage of the incoming bid value as a penalty. Accepting a bid transfers the parcel to the bidder, returns the appropriate collateral to the bidder, and transfers the sale proceeds (plus or minus applicable network fees) to the now former parcel licensor.

## Code

[`CFAPenaltyBidFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/facets/CFAPenaltyBidFacet.sol)

## Reference Documentation

Coming soon
