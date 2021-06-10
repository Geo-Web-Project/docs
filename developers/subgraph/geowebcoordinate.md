---
description: >-
  1 of 4 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph)
---

# GeoWebCoordinate

The GeoWebCoordinate entity indexes Geo Web coordinate's inclusion in an existing land parcel and it's shape as a set of four [GeoPoints](geopoint.md) \(bottom left, bottom right, top right, and top left\):

{% code title="GeoWebCoordinate" %}
```graphql
id: ID!
landParcel: LandParcel!
createdAtBlock: BigInt!
pointBL: GeoPoint!
pointBR: GeoPoint!
pointTR: GeoPoint!
pointTL: GeoPoint!
```
{% endcode %}

GeoWebCoordinate uses data from the [Geo Web Parcel ](../smart-contracts/geo-web-parcel.md)smart contract to map a coordinate to a parcel. Querying this entity is the first external call for [Spatial Browsers](../spatial-browsers.md) to resolve content. 

