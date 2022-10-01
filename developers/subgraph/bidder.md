---
description: >-
  1 of 5 queryable entities in the Geo Web Subgraph
  (https://thegraph.com/explorer/subgraph/geo-web-project/geo-web-subgraph).
---

# Bidder

The `Bidder` entity indexes all outstanding bids and parcels for a given wallet address. This can be used to provide a user with all of their land portfolio information.

{% code title="Bidder" %}
```graphql
id: ID!
bids: [Bid!]!
```
{% endcode %}
