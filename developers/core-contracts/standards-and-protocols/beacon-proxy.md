---
description: Standard for scalable management of multiple smart contract instances
---

# Beacon Proxy

While the OpenZeppelin Beacon Proxy pattern isn't explicitly used in the core contracts, it does serve as the architectural inspiration for the contracts that define the market operations for each individual land parcel on the Geo Web.

{% hint style="info" %}
An overview of OpenZeppelin's Beacon Proxy pattern can be found at [https://docs.openzeppelin.com/contracts/3.x/api/proxy#beacon](https://docs.openzeppelin.com/contracts/3.x/api/proxy#beacon).
{% endhint %}

At a high level, the design challenge was to be able to accommodate a separate instance of the `BeaconDiamond` contract for each land parcel on the Geo Web while maintaining upgradability without requiring iteratative changes to each instance.&#x20;

This is what the Beacon Proxy is designed to do. So, we combined it with the [Diamonds Multi-Facet Proxy](diamonds-multi-facet-proxy-eip-2535.md) standard for our own hybrid implementation.

The complete implementation details of the [PCOLicenseDiamond](../pcolicensebeacon.sol.md) and [BeaconDiamond](../beacondiamond.sol.md) contracts are explored in their respective sections.&#x20;
