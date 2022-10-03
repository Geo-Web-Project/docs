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

## Reference Documentation

Coming soon
