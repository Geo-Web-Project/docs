---
description: >-
  A system of property rights that blends the free market mechanics with common
  ownership.
---

# Partial Common Ownership

The Geo Web uses a novel property rights regime referred to as _partial common ownership_$$^1$$ to fairly and efficiently administer its digital land market. Partial common ownership is a market-based solution with an important twist:

1. Land holders must publicly declare a  "For Sale Price" for each of their land parcels
2. Land holders pay a license fee to the network based on a percentage of their "For Sale Price"
3. Any market participant can force transfer of a parcel by paying the current land holder their "For Sale Price" \(and the outstanding prepaid network fee balance\)

Here's an example of how it works in practice:

{% hint style="info" %}
1\) Alice is the first Geo Web user to claim a plot of land in a park. She does so for free \(excluding blockchain transaction costs\). 

2\) Alice sets her "For Sale Price" at 1 ETH. She prepays .1 ETH for one year of network fees \(10% annual rate for this example\). The expiration date of her land parcel license is set one year into the future.

3\) Alice anchors a piece of augmented reality art to the parcel. She loves showing her art installation to her friends every time they walk through the park.

4\) Six months later, Bob decides that he wants to put a different piece of art in the park and triggers a force transfer of the parcel from Alice.

5\) Bob pays Alice 1.05 ETH \(1 ETH price + .05 ETH prepaid network fees remaining\). The land parcel license is transferred to Bob. He now has exclusive rights to anchor content within the parcel's boundaries.

6\) Bob thinks the land is worth 2 ETH and changes his "For Sale Price" accordingly. The expiration date of his license is shortened to 3 months to reflect higher value. He can deposit additional network fees at any time to extend the expiration date.
{% endhint %}

These rules are implemented and enforced on the Geo Web via the [Digital Land Registry smart contracts](digital-land-registry.md). It's an elegant system that enables a unified global digital land market with minimal centralization and overhead.

The system offers numerous benefits for the network's health versus a system of pure private property rights:

* The system encourages allocative efficiency. This essentially means it's easier for land to make its way into the hands of those that will put it into higher productive use.
  * This dynamic increases the aggregate utility of the network and helps drive a virtuous network effects cycle.
* The requirement for a public "For Sale Price" eliminates long, inefficient negotiations and monopoly holdouts. 
  * This is a pervasive issue in the World Wide Web's domain name market. It would crush AR metaverse adoption due to the extremely low substitutability of two land parcels.
* An individual holding a parcel of land means all other participants \(i.e. "the network"\) are excluded from doing the same. This system assesses direct cost to the land holder to compensate the network for their exclusion—making for a more fair system.
* Network fees are used to fund protocol and ecosystem development which, in turn, drives value and users.

While the novelty of the Geo Web's property rights system will require effective messaging and additional user education, it is the optimal system for taking an AR metaverse from boostrap to scale.

{% hint style="warning" %}
Additional Implementation Details:

* The fee rate for the Geo Web testnet is set at 10%. Mainnet rate will likely be set slightly lower to encourage early adoption and investment.
* At the time of initial claim, a minimum "For Sale Price" will be enforce for mainnet.
* At the time of initial claim, users must deposit at least one year worth of network fees.
* Land holders cannot raise their "For Sale Price" to a level that results in an expiration date less than two weeks in the future.
* Expiration dates can only be set two years into the future. A land holder can lower their "For Sale Price" to a level that would otherwise result in an expiration date beyond two years, but this results in forfeiture of the proportionally excessive network fees. 
* Parcels that reach their expiration date go into a Dutch auction. The auction price is linearly decreased from the "For Sale Price" to 0 over two weeks. Any user can claim the land during the auction at the current price. The previous land holder receives the proceeds from the auction.
{% endhint %}

## Footnotes

$$^1$$This system is also known as Harberger Taxes and is named after Arnold Harberger, the economist who initially outlined the basic scheme. Most recently it's gained attention through the book [_Radical Markets_](http://radicalmarkets.com/) __by Eric A. Posner and Glen E. Weyl. Vitalik Buterin has [helped popularize the idea](https://vitalik.ca/general/2018/04/20/radical_markets.html) in blockchain/crypto circles as well.

