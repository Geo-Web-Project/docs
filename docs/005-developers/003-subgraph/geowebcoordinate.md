---
description: >-
  1 of 5 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph).
---

# GeoWebCoordinate

The `GeoWebCoordinate` entity indexes Geo Web coordinate's inclusion in an existing land parcel and its shape as a set of four [GeoPoints](./geopoint) (bottom left, bottom right, top right, and top left):

{% code title="GeoWebCoordinate" %}

```graphql
id: ID!
parcel: GeoWebParcel!
createdAtBlock: BigInt!
coordX: BigInt!
coordY: BigInt!
pointBL: GeoPoint!
pointBR: GeoPoint!
pointTR: GeoPoint!
pointTL: GeoPoint!
```

{% endcode %}

GeoWebCoordinate uses data from the [GeoWebParcel](../core-contracts/registrydiamond/geowebparcelfacet/) smart contracts to map a coordinate to a parcel. Querying this entity is the first external call for Spatial Browsersto resolve content.&#x20;
