---
description: >-
  1 of 5 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph).
---

# Bid



{% code title="Bid" %}
```graphql
id: ID!
timestamp: BigInt!
bidder: Bidder!
contributionRate: BigInt!
perSecondFeeNumerator: BigInt!
perSecondFeeDenominator: BigInt!
forSalePrice: BigInt!
parcel: GeoWebParcel!
```
{% endcode %}
