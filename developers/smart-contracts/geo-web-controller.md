# Geo Web Controller

## Summary

The Geo Web Controller is the both the accountant for the digital land market and coordinator of the Geo Web's other smart contracts.

The Geo Web Controller maintains state for the [partial common ownership](../../concepts/partial-common-ownership.md) functions including the parcel for sale price, expiration date, auction variables, network fee rate, and initial claim minimums, so is a natural coordination point for the other contracts.

It processes additional network fee payments and land market transfer payments. It routes parcel license changes to the [ERC-721 License](erc-721-license.md) contract.

The contract validates new land claims \(value and network fee minimums met\) then passes the prospective claim to [Geo Web Parcel](geo-web-parcel.md) and [Geo Web Coordinate](geo-web-coordinates.md) for validation and definition of the parcel shape. Valid claims are passed to the [ERC-721 License](erc-721-license.md) contract for minting.

## Code

[`GeoWebAdmin_v0.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/master/contracts/GeoWebAdmin_v0.sol)

## Reference Documentation

Coming Soon

