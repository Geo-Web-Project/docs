---
description: Queryable index of data from the Geo Web's smart contracts.
---

# Geo Web Subgraph

{% hint style="info" %}
The Geo Web Subgraph can be found at [https://thegraph.com/hosted-service/subgraph/geo-web-project/geo-web-subgraph](https://thegraph.com/hosted-service/subgraph/geo-web-project/geo-web-subgraph).
{% endhint %}

## Intro to The Graph

[The Graph](https://thegraph.com/) is a decentralized protocol for indexing and querying data from blockchains (like Ethereum) and distributed networks (like IPFS). The protocol is used to create open APIs called subgraphs.

You can explore The Graph's documentation for more details about [subgraphs ](https://thegraph.com/docs/introduction)and The Graph's [decentralized network of indexes](https://thegraph.com/docs/network#overview).

## Geo Web Subgraph

The [Geo Web subgraph](https://thegraph.com/hosted-service/subgraph/geo-web-project/geo-web-subgraph) indexes the Geo Web's [smart contracts](../core-contracts/) to make the data more easily accessible and useful for decentralized applications.

Currently, the subgraph is used to populate digital land data on the [Cadastre](../cadastre-development.md) and enable efficient content resolution for [Spatial Browsers](../spatial-browser-development.md). In the future, this Geo Web subgraph (or others) could expand to support land market evaluation tools, historical lookups, and other use cases.

The following sections lay out the details of the Geo Web subgraph's four queryable _entities_:

* [GeoWebParcel](erc721license.md)
* [GeoWebCoordinate](geowebcoordinate.md)
* [GeoPoint](geopoint.md)
* [Bid](bid.md)
* [Bidder](bidder.md)

### Schema

[`schema.graphql`](https://github.com/Geo-Web-Project/geo-web-subgraph/blob/main/schema.graphql)
