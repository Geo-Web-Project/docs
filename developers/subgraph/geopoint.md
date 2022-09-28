---
description: >-
  1 of 5 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph).
---

# GeoPoint

The GeoPoint entity indexes latitude/longitude coordinate pairs with a unique ID according to the grid defined in the [LibGeoWebCoordinate](../core-contracts/geowebparcelfacet/geo-web-coordinates.md) library:

{% code title="GeoPoint" %}
```graphql
id: ID!
lon: BigDecimal!
lat: BigDecimal!
```
{% endcode %}

GeoPoint IDs define the four corners of Geo Web Coordinates in the [GeoWebCoordinate](geowebcoordinate.md) entity.
