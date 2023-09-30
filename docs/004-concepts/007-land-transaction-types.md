---
slug: /concepts/land-transaction-types
description: An overview of the six basic transactions of the Geo Web digital land market.
---

# Land Transactions

:::danger
On the [testnet Cadastre](https://testnet.geoweb.land/), Optimistic Goerli ETH is required for all transactions. You can get free testnet ETH from [a community faucet or bridge it from Goerli](https://community.optimism.io/docs/useful-tools/faucets/).&#x20;
:::

:::info
The Geo Web has numerous configurable parameters (e.g. network fee rate, bid review window, etc) that can be updated via governance. Review the current values on the [Network Parameters documentation page](../community-and-governance/network-parameters).
:::

## Claims

At network genesis, no land is controlled by any individual. The world is a blank canvas. Geo Web users claim and define new parcels of land to populate the network.

Land claims are started by clicking on any open coordinate on the [Geo Web Cadastre](./cadastre-intro) and selecting additional coordinates to define the parcel shape. Prospective land claimants must enter a `For Sale Price` then authorize the [required](../community-and-governance/network-parameters) `Claim Payment`, `Network Fee` stream, and `Buffer` `Deposit` to claim the parcel. The transaction must be successfully signed and paid for (including gas fees) through the user's Web3 wallet for the claim to become a valid Geo Web parcel.

## For Sale Price Change

Geo Web landholders may update their public `For Sale Price` at any time. This transaction impacts the parcel's `Network Fee` stream rate and required `Buffer Deposit`**.**

To change the `For Sale Price` of a parcel, the landholder should navigate to their parcel, click **Edit Parcel**, enter a new value for `For Sale Price`, and sign the transaction via their Web3 wallet.

## Bid

The Geo Web implements a version of [partial common ownership](./partial-common-ownership) that is more "owner-forgiving" than the unmodified version. Landholders are given the opportunity to reject rival bids for their parcel by paying a penalty calculated as a percentage of the incoming bid.

Market participants that want to assume control of an existing parcel must place a collateralized bid. To do so, they navigate to the desired parcel, click **Place Bid**, then enter a `For Sale Price` that reflects their valuation of the parcel. Executing this transaction included pre-authorizing the required `Network Fee` stream and depositing their bid collateral and `Stream Buffer`.

The current licensor will have a[ mandated time window](../community-and-governance/network-parameters) to respond to the bid. The bidder will receive the parcel and their refundable collateral (Bid - Previous For Sale Price) if the bid is accepted. They will receive their full collateral back if the bid is rejected.

## Accept Bid

After a bid is placed on an existing parcel, the current licensor has a [mandated time window](../community-and-governance/network-parameters) to act on it. If the licensor wants to accept the bid, they navigate to the parcel, scroll down in the left panel, then click **Accept Bid**. Once the transaction is confirmed, the now former licensor will receive a payment equal to their `For Sale Price` and the asset is transferred.

## Reject Bid

Rejecting a rival bid requires the current licensor to set a `For Sale Price` greater or equal to the incoming bid and paying a [penalty proportional to the bid](../community-and-governance/network-parameters). A licensor can do this by navigating to the parcel, scrolling down in the left panel, clicking **Reject Bid**, then entering and submitting the required fields.

## Trigger Transfer

If a landholder doesn't respond to a rival bid within the mandated timeframe or modifies their `Network Fee` stream while there is an outstanding bid, the parcel moves to a **Ready to Transfer** state. The licensor, bidder, or any other market participant can affect the transfer by navigating to the parcel and clicking **Trigger Transfer**. The licensor will receive their `For Sale Price` payment plus or minus their surplus/deficit for `Network Fees` (the licensor retains the responsibility to pay the required `Network Fees` until the parcel is transferred regardless of circumstances). The bidder will receive the land parcel and their returnable collateral.

## Foreclosure Claim

When a land parcel's required `Network Fees` aren't paid (i.e. the landholder's ETHx balance reaches 0 or they cancel/lower the stream value), it goes into a [Dutch auction](https://en.wikipedia.org/wiki/Dutch_auction). The auction price decreases linearly (every second) from the previous `For Sale Price` to zero over a [configurable time period](../community-and-governance/network-parameters). This helps ensure open and efficient price discovery. When a parcel reaches the end of the auction period and has not been claimed, it simply remains free to claim (excluding transaction costs).

Prospective landholders can submit an auction claim at the current price to take control of the parcel. The landholder who let their license lapse will still receive the proceeds from the auction as part of the transaction (so the penalty for accidental lapses isn't overly harsh).

## Reclaim

When a parcel goes into a foreclosure auction, the previous landholder can reclaim their parcel by making navigating to the parcel and submitting a **Reclaim** transaction. They must set a `For Sale Price` and restart a corresponding `Network Fee` stream. The landholder regains full rights to the parcel as long as this is done before someone else makes a successful auction claim.
