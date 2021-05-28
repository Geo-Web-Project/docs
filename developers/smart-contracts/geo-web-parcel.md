# Geo Web Parcel

### Summary

Geo Web Parcel contract manages the formation and representation of land parcels. It maintains the state \(claimed/unclaimed\) of all Geo Web Coordinates in an EVM-optimized format called a _word_. There are 256 coordinates in a word.

When called by the [Geo Web Controller](geo-web-controller.md) to mint a new parcel, Geo Web Parcel uses the [Geo Web Coordinate](geo-web-coordinates.md) library to traverse a path defined by an origin point and ordinal directions. This coordinate path defines the shape of the parcel. Claims which include an already claimed Geo Web Coordinate will be rejected. Valid claims will update all coordinates included in the path to claimed and new parcel ID will be passed to the Geo Web Controller for minting.

### Code

[`GeoWebParcel.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/master/contracts/GeoWebParcel.sol)

### Reference Documentation

Coming Soon

