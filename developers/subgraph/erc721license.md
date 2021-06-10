---
description: >-
  1 of 4 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph)
---

# ERC721License

The ERC721License entity indexes data from both the [ERC-721 License](../smart-contracts/erc-721-license.md) and [Geo Web Controller](../smart-contracts/geo-web-controller.md) smart contracts. 

It includes the most fundamental information about each Geo Web land parcel \(`owner` & [`lanndParcel`](landparcel.md)\), linked content \(`rootCID` of the Ceramic stream\), and [partial common ownership](../../concepts/partial-common-ownership.md) attributes \(`value` & `expirationTimestamp`\):

{% code title="ERC721License" %}
```graphql
id: ID!
owner: Bytes
value: BigInt
expirationTimestamp: BigInt
rootCID: String
landParcel: LandParcel
```
{% endcode %}

[Spatial Browsers](../spatial-browsers.md) can use a chain of queries to obtain the`rootCID` from ERC721License for the user's current location \(i.e. land parcel\) then resolve the content from the Ceramic & IPFS networks.

