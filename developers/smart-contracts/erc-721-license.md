# ERC-721 License

## Summary

The ERC-721 License contract maintains the canonical list of Geo Web land parcel licenses, licensees, and root content links. This is the core information referenced to create the Geo Web browsing experience.

The contract has three functions: mint license, set content, and remove content. It does not maintain or administer information required for the [partial common ownership](../../concepts/partial-common-ownership.md) market, so `mintLicense` is only called through the [Geo Web controller contract](geo-web-controller.md). `setContent` and `removeContent` allow the token \(i.e. parcel\) licensee to change the land parcel's [linked content](../content-layer/) via a root `ceramicStreamId`.  

## Code

[`ERC721License.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/master/contracts/ERC721License.sol)

## Reference Documentation

Coming Soon

