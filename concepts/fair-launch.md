---
description: Describing the how we'll launch the Geo Web's land market fairly and why.
---

# Fair Launch

The Geo Web project is a public good that attempts to establish legitimacy through fairness and economic efficiency (amongst other core values).&#x20;

Its [partial common ownership (PCO) system ](partial-common-ownership.md)promotes _ongoing_ healthy market dynamics (i.e. fairness and efficiency), but the base rules do not account for certain incentives created at the land market genesis.&#x20;

Geo Web land will transition from ownerless/non-existent to globally claimable at launch. If any space on the Geo Web is valued for any reason (utility, speculation, or otherwise), this moment in time would represent the start of a race to claim that economic value if the launch is naively designed.

It is [well-established](https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches) that "first-come-first-serve" is not a fair or efficient allocation mechanism under these conditions. It's not fair because [technically advanced participants have structural advantages](https://docs.flashbots.net/new-to-mev) over the average user to win these races on blockchains. It's not efficient because funds that could go [toward the project/public goods](network-funds.md) are consumed with high transaction fees. To top it all off, these races create negative externalities for the underlying blockchain network and its users through network congestion (see: Yuga Labs' [_Otherside_ metaverse launch](https://www.coindesk.com/business/2022/05/01/bayc-team-raises-285m-with-otherside-nfts-clogs-ethereum/) for a perfect demonstration of these issues).

Our solution is to launch the Geo Web with a two-week, global [Dutch auction](https://en.wikipedia.org/wiki/Dutch\_auction).

The auction will start with a high claim fee (TBD, but higher than land parcels should feasibly be initially valued at) which linearly decreases each second until it reaches zero at the end of the auction period.&#x20;

This claim fee is uniformly applicable to any parcel claim across the globe at the given time during the auction. It is a one-time fee and does not interact with the ongoing requirements of ownership in the PCO market.&#x20;

Here's an example:

{% hint style="info" %}
* The fair launch auction is initiated with a 20 ETHx starting claim fee and will run for two weeks.
* After exactly one week, a participant places a claim bid for a parcel that they believe to be uniquely valuable. It could be a famous/high-trafficked area like Times Square, or it could correspond to the physical location of their business.
* Their bid must authorize a non-refundable payment of 10 ETHx to the Geo Web treasury.&#x20;
  * The required claim fee will inherently decrease between the submission of the bid and transaction processing, so the final payment will be correspondingly less than 10 ETHx if the claim is successful.
* The bid must also set a "For Sale Price" and authorize a network fee payment stream.
  * From a rational perspective, the "For Sale Price" should be set greater or equal to the claim fee.
  * For a 15 ETHx value, the network payment stream would be \~0.000000476 ETHx/second.
* Ongoing ownership is subject to the normal rules and economic incentives established under the partial common ownership system.
{% endhint %}

This structure provides a straightforward mechanism to prioritize competing parcel definitions (parcels can't overlap) and creates efficient price discovery for the new land assets. It allocates Geo Web land to those that value it the highest and can justify the cost through economic value creation (just as the ongoing market does).&#x20;

The initial funds generated during this auction will fund public goods and may be an important part of bootstrapping the network in it's nascent phase, but "revenue" maximization is never the primary goal of the Geo Web.&#x20;

Making initial land claims "free" may sound noble (and fairer to those with less capital), but that is just not how it would play out in practice if there is any competition/demand: the claim process would devolve into the FCFS race described in the opening of this article.&#x20;

If there is no competition for a given area (e.g. a low population area or a single-family home), then the auction will end with no harm and no foul. Ongoing claims will not require an upfront payment. But all interested participants will have been given a fair chance to back their claim(s) with a payment of commensurate value.
