---
description: >-
  1 of 5 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph).
---

# Bid

The `Bid` entity indexes the details of each outstanding bid on the Geo Web including the `Network Fee` rate at the time the bid was placed.&#x20;

This index covers active bids (i.e. parcels) and pending bids (i.e. bids waiting for the current licensor's response).

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
