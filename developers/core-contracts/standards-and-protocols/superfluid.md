---
description: A protocol that enables streaming token payments on the Geo Web
---

# Superfluid

Superfluid's streaming token protocol allowed the Geo Web to eliminate `Network Fee` deposits for its [partial common ownership](../../../concepts/partial-common-ownership.md) land market improving capital effiency and lowering barriers to entry for landholders.

It also provides composability and network effects for creative uses of `Network Fees` to fund public goods.

{% hint style="info" %}
More details and documentation of the Superfluid protocol can be found at [https://docs.superfluid.finance/](https://docs.superfluid.finance/).
{% endhint %}

The biggest design decisions made with Superfluid in the Geo Web contracts were the use of [Super Apps](https://docs.superfluid.finance/superfluid/developers/developer-guides/super-apps) and the [CFA Access Control List (ACL)](https://docs.superfluid.finance/superfluid/developers/solidity-examples/cfa-access-control-list-acl) functionality.

Super Apps offer the benefit of custom logic and automated control of streams, at the expense of modularity, code readability, and stream composability.

ACL offers the ability to separate stream payments per parcel and enables fine-grained user stream control.

We ultimately limited the prominence of the Super App and utilized ACL to create more modularity in our `Network Fee` payment system.
