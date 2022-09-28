---
description: >-
  A system of property rights that blends the free market mechanics with common
  ownership..
---

# Partial Common Ownership

The Geo Web uses a novel property rights regime called _partial common ownership_$$^1$$ to fairly and efficiently administer its digital land market. Partial common ownership is a market-based solution with an important twist on private property rights:

1. Landholders must publicly declare a  `For Sale Price` for each of their land parcels
2. Landholders pay a license fee to the network based on a percentage of their `For Sale Price`
3. Any market participant can force the transfer of a parcel by paying the current landholder their `For Sale Price`&#x20;

This system can be conceptualized as creating leases with equity buyout mechanisms.&#x20;

There are multiple ways to implement these basic rules in a smart contract with different technical, user experience, and market tradeoffs.

The Geo Web currently uses streaming payments for license fees along with a more owner-forgiving continuous auction mechanism.

Here's an overview of how it works in practice:

{% hint style="info" %}
1\) Alice is the first Geo Web user to claim a plot of land in a park.

2\) Alice sets her `For Sale Price` at 1 ETHx ([ETHx is a wrapped version](https://docs.superfluid.finance/superfluid/protocol-developers/guides/super-tokens) of the ETH that enables streaming payments). Alice is required to authorize a `Network Fee` payment stream equivalent to 0.1 ETHx/per year (based on a 10% annual rate for this example). The stream increments her payment every second. She must keep the ETHx balance in her wallet above 0 to maintain the stream and her parcel license.

3\) Alice is an artist so she anchors a piece of her augmented reality art to the parcel. Now, whenever she or any Geo Web user walks through the park they see her art installation.

4\) Six months later, Alice's art installation has become a bit of a local landmark. Bob decides that he wants to buy the parcel and change the art in the park.

5\) Bob places a fully collateralized on-chain bid that values the parcel at 1.5 ETHx and preauthorizes his corresponding license fee stream.

6\) Alice has 7 days to accept or reject Bob's bid. Alice cannot change her `For Sale Price`. No other party can place a bid during this period.

7\) If Alice wants to keep control of the parcel, she can reject the bid within the window by paying a penalty fee to the Geo Web treasury equal to 10% of the bid's value (think of this as paying for unpaid fees because her previous `For Sale Price` was too low). Bob's collateral is returned in full and his preauthorized stream is canceled.

8\) If Alice wants to accept the bid, she will be paid 1 ETHx (her `For Sale Price`) from Bob's collateral. Her payment stream will be closed, Bob's will be opened, his remaining collateral will be returned to him, and the license for the parcel will transfer to Bob.&#x20;

9\) Bob now has exclusive rights to anchor content within the parcel's boundaries and must maintain a valid license fee payment stream.
{% endhint %}

The Geo Web implements and enforces these rules via the [Digital Land Registry smart contracts](digital-land-registry.md). It's an elegant system that enables a unified global digital land market with minimal centralization and overhead.

The system offers numerous benefits for the network's health versus a system of pure private property rights:

* The system encourages allocative efficiency. Essentially, it's easier for land to make its way into the hands of those that will put it to higher productive use because they are willing to pay more.
  * This dynamic increases the aggregate utility of the network and helps drive a virtuous network effects cycle.
* The requirement for a public `For Sale Price` eliminates long, inefficient negotiations and monopoly holdouts.&#x20;
  * This is a pervasive issue in the World Wide Web's domain name market. This dynamic would severely hamper adoption due to the low substitutability of two land parcels.
* An individual holding a parcel of land means all other participants (i.e. "the network") are excluded from doing the same. This system assesses direct cost to the landholder to compensate the rest of the network for their exclusion—making for a more fair system.
* `Network Fees` are used to fund protocol and ecosystem development which, in turn, drives value and users.

While the novelty of this property rights system will require effective messaging and additional user education, it is the optimal system for taking the Geo Web from bootstrap to scale.

{% hint style="warning" %}
Additional Implementation Details:

* The fee rate for the Geo Web testnet is set at 10%.
* A minimum `For Sale Price` will be enforced for mainnet to limit spam land grabs.
* The mainnet Geo Web land market will be initiated with a fair launch auction. Claims during this period will require a one-time payment as determined by a Dutch auction (starts at a high value and linearly decrease to the minimum `For Sale Price`). This is to limit gas price wars for highly-desirable locations and create a playing field in which those who genuinely value the land the most have a fair opportunity to claim it.
* If a licensor's payment stream runs dry, their corresponding parcel(s) will also be placed in a Dutch auction. The auction price will linearly decrease from the previous `For Sale Price` to zero over two weeks. Any user can claim the land during the auction at the current price. The previous landholder receives the proceeds from the auction.
{% endhint %}

## Footnotes

$$^1$$This system is also known as Harberger Taxes (economist Arnold Harberger initially outlined the basic scheme), Self-Assessed Licenses Sold at Auction (SALSA), Common Ownership Self-assessed Tax (COST), and Depreciating Licenses. Most recently it's gained attention through the book [_Radical Markets_](http://radicalmarkets.com/) by Eric A. Posner and Glen E. Weyl. Vitalik Buterin has [helped popularize the idea](https://vitalik.ca/general/2018/04/20/radical\_markets.html) in blockchain/crypto circles as well.
