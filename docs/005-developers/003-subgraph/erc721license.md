---
description: >-
  1 of 5 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph).
---

# GeoWebParcel

The `GeoWebParcel` entity indexes the most fundamental information about each Geo Web land parcel (ID, parcel coordinates, owners) & [partial common ownership](../../concepts/partial-common-ownership) attributes (current For Sale Price and incoming bid value):

{% code title="GeoWebParcel" %}

```graphql
id: ID!
coordinates: [GeoWebCoordinate!]
licenseOwner: Bytes
currentBid: Bid
pendingBid: Bid
licenseDiamond: Bytes
```

{% endcode %}

Spatial Browsers can use a chain of queries to obtain the `rootCID` from ERC721License for the user's current location (i.e. land parcel) then resolve the content from the Ceramic & IPFS networks.
