---
description: Describing the Geo Web's approach to initializing the land market fairly.
---

# Fair Launch

{% hint style="success" %}
**Mainnet Fair Launch TL;DR**\


**Network:** Optimism ([EVM ChainID 10](https://chainlist.org/?search=Optimism))

**Claim Interface:** Geo Web Cadastre ([https://geoweb.land](https://geoweb.land) or [https://cadastre.eth.limo](https://cadastre.eth.limo))

**Auction Type:** Dutch auction (linearly decreasing)

**Start Time (claims allowed):** Thursday, December 15th, 2022, 17:00 UTC

**End Time (minimum claim price reached):** Saturday, January 14th, 2023, 17:00 UTC

**Starting Price** 100 ETHx ([Superfluid wrapped ETH for streaming](https://docs.superfluid.finance/superfluid/developers/super-tokens/super-tokens/types-of-super-tokens/native-asset-super-tokens))

**Ending Price:** .005 ETHx (less than the price of a standard domain name)

**Land Available:** The whole Earth—user-defined parcels must be rectangular, not overlap an existing parcel, and be less than or equal to 3,000 [Geo Web coordinates](../developers/core-contracts/registrydiamond/geowebparcelfacet/geo-web-coordinates.md).

‍

**Market Structure:** Auction bid payments are made in addition to the [ongoing PCO market requirements](partial-common-ownership.md).

**Payment Token**: If you don’t have ETH on Optimism yet, you can bridge funds via the [Optimism Bridge](https://app.optimism.io/bridge/deposit) or [alternatives](https://www.optimism.io/apps/bridges). You can also directly purchase ETH on Optimism via [Ramp](https://ramp.network/buy/?defaultAsset=OPTIMISM\_ETH) (no affiliation, not an endorsement, DYOR).

**Test Before You Buy:** If you're not ready for the real thing just yet, you can explore the Geo Web testnet accessible at [https://testnet.geoweb.land/](https://testnet.geoweb.land/).
{% endhint %}

The Geo Web project is a public good that attempts to establish legitimacy through fairness and economic efficiency (amongst other core values).&#x20;

Its [partial common ownership (PCO) system ](partial-common-ownership.md)promotes _ongoing_ healthy market dynamics (i.e. fairness and efficiency), but the base rules do not account for certain incentives created at the land market genesis.&#x20;

Geo Web land is transitioning from ownerless/non-existent to globally claimable at launch. If any space on the Geo Web is valued for any reason (utility, speculation, or otherwise), this moment in time would represent the start of a race to claim that economic value if the launch is naively designed.

It is [well-established](https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches) that "first-come-first-serve" is not a fair or efficient allocation mechanism under these conditions. It's not fair because [technically advanced participants have structural advantages](https://docs.flashbots.net/new-to-mev) over the average user to win these races on blockchains. It's not efficient because funds that could go [toward the project/public goods](network-funds.md) are consumed with high transaction fees. To top it all off, these races create negative externalities for the underlying blockchain network and its users through network congestion (see: Yuga Labs' [_Otherside_ metaverse launch](https://www.coindesk.com/business/2022/05/01/bayc-team-raises-285m-with-otherside-nfts-clogs-ethereum/) for a perfect demonstration of these issues).

Our solution is to launch the Geo Web with a global [Dutch auction](https://en.wikipedia.org/wiki/Dutch\_auction).

The auction will last 30 days (December 15, 2022, to January 14th, 2022, 17:00 UTC). It starts with a high claim fee of 100 ETHx which linearly decreases each second until it reaches the minimum `For Sale Price` of .005 ETHx at the end of the auction period.&#x20;

This claim fee is uniformly applicable to any parcel claim across the globe at the given time during the auction. It is a one-time fee and does not interact with the ongoing requirements of ownership in the PCO market.&#x20;

Here's an example:

{% hint style="info" %}
* The fair launch auction is initiated with a 100 ETHx starting claim fee and will run for 30 days.
* After exactly 15 days, a participant wants to place a claim bid for a parcel that they believe to be uniquely valuable. It could be a famous/high-trafficked area like the Eiffel Tower, a symbolic location, or it could correspond to the physical location of their business.
* Their bid must authorize an auction payment of 50.0025 ETHx to the Geo Web treasury.&#x20;
  * The required auction bid will inherently decrease between the submission of the bid and transaction processing, so the final payment will be proportionally less than 50.0025 ETHx if the claim is successful.
* The bid must also set a `For Sale Price` and authorize a network fee payment stream.
  * From a rational perspective, the `For Sale Price` should be set greater or equal to the claim fee. No one should want to immediately sell a parcel for less than they just paid.
  * For a 50.0025 ETHx value, the network payment stream would be 5.00025 ETHx/year (\~0.0000001586 ETHx/second)&#x20;
  * A [buffer deposit](https://docs.superfluid.finance/superfluid/sentinels/liquidations-and-toga#liquidation-and-solvency) is also required to incentivize bots to close streams that have become insolvent on the Superfluid protocol. In our implementation Optimism, this will require 8 hours worth of stream (\~.040566644 ETHx at this `For Sale Price`).
* The user must have enough ETHx in their wallet to complete this transaction plus maintain their stream for a reasonable time (we don't want parcels to immediately go into foreclosure!). This can be done through the "Wrap ETH to ETHx" button shown on the claim transaction window or in Cadastre's User Dashboard.
* Ongoing ownership is subject to the normal rules and economic incentives established under the partial common ownership system.
{% endhint %}

This structure provides a straightforward mechanism to prioritize competing parcel definitions (parcels can't overlap) and creates efficient price discovery for the new land assets. It allocates Geo Web land to those that value it the highest and can justify the cost through economic value creation (just as the ongoing market does).&#x20;

The initial funds generated during this auction will fund public goods and may be an important part of bootstrapping the network in its nascent phase, but "revenue" maximization is never the primary goal of the Geo Web.&#x20;

Making initial land claims "free" may sound noble (and fairer to those with less capital), but that is just not how it would play out in practice if there is any competition/demand: the claim process would devolve into the FCFS race described in the opening of this article.&#x20;

If there is no competition for a given area (e.g. a low-population area or a single-family home), then the auction will end with the [minimum `For Sale Price`](../community-and-governance/network-parameters.md). All interested participants will have been given a fair chance to back their claim(s) with a payment of commensurate value.
