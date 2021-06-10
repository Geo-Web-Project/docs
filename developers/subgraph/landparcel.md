---
description: >-
  1 of 4 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph)
---

# LandParcel

The LandParcel entity is comprised of [ERC721License](erc721license.md) and [GeoWebCoordinate](geowebcoordinate.md) data. It links the shape and location of a parcel \(i.e. its [Geo Web Coordinates](../smart-contracts/geo-web-coordinates.md)\) to the parcel's license:

{% code title="LandParcel" %}
```graphql
id: ID!
license: ERC721License!
coordinates: [GeoWebCoordinate!]
```
{% endcode %}

The coordinate-to-parcel mapping originates from the [Geo Web Parcel](../smart-contracts/geo-web-parcel.md) smart contract. 

