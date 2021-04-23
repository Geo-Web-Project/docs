---
description: An overview of the six basic transactions of the Geo Web digital land market.
---

# Land Transactions

{% hint style="danger" %}
On the [testnet Cadastre](https://geoweb.eth.link/), Kovan ETH and a placeholder GEO token \(no value\) are required for all transactions. On your first Cadastre visit, scroll to the bottom of any transaction panel for links to complete these three required steps:

1\) Claim kETH  
2\) Claim GEO  
3\) Authorize the Cadastre to spend your tokens
{% endhint %}

### Claims

At network genesis, no land is controlled by any individual. The world is a blank canvas. Geo Web users claim and define new parcels of land to populate the network. 

Land claims are started by clicking on any open coordinate on the [Geo Web Cadastre](cadastre.md) and selecting additional coordinates to define the parcel shape. Prospective land claimants must enter a **For Sale Price** and at least one year's worth of **Network Fee Payment** to claim the parcel. The transaction must be successfully signed and paid for \(including gas fees\) through the user's Web3 wallet for the claim to become a valid Geo Web parcel.

![A land claim on the Geo Web Cadastre](../.gitbook/assets/land-claim.gif)

### Network Fee Payments

To maintain control of a Geo Web parcel, a land holder must make network fee payments in accordance with the [partial common ownership](partial-common-ownership.md) system. This requirement is expressed with the parcel **Expiration Date** and **Network Fee Balance** on the Cadastre.

The first network fee deposit is required at the time of the land claim. Additional network fee payments can be made at any time by the current land holder to extend the duration of their license. 

To complete a payment, the land holder should navigate to their parcel, click **Edit**, enter the value for an **Additional Network Fee Payment**, and sign the transaction via their Web3 wallet. The parcel's **Expiration Date** and **Network Fee Balance** are recalculated accordingly.

### For Sale Price Change

Geo Web land holders may update their public **For Sale Price** at any time. This transaction impacts the parcel's **Network Fee Balance** depletion rate and results in a new **Expiration Date.**

To change the **For Sale Price** of a parcel, the land holder should navigate to their parcel, click **Edit**, enter a new value for **New For Sale Price**, and sign the transaction via their Web3 wallet.

{% hint style="warning" %}
The Digital Land Registry enforces minimum and maximum values for a parcel's **Expiration Date** \(relative to the current Date/Time\) in transactions involving **For Sale Price** changes. This is done to help prevent spam claims and the creation of artificial hurdles to forced transfers:

* Price Increase/Minimum Expiration Date= +2 Weeks
* Price Decrease/Maximum Expiration Date= +2 Years \(Users will be warned, but not prevented from making the proposed change. Excess network funds will be forfeited.\)
{% endhint %}

### Forced Transfers

Forced transfers are market transactions which result in change in control of a land parcel. They are "forced" because when a buyer triggers the transaction, the current land holder doesn't have the right to refuse it. This may seem radical, but it's part of an important dynamic in the partial common ownership system.

Forced transfers are triggered by a buyer submitting a transaction to the Registry which pays the current land holder an amount equal to their **For Sale Price** + **Network Fee Balance**. The **For Sale Price** should represent the current land holder's _honest_ valuation of the land which is why refusal rights aren't included in the market structure. After forcing a transfer, the new land holder will presumably raise their **For Sale Price** above the previous value. They value the land more \(presumably because of higher utility gained\) and will pay a proportionally higher network fee. This is healthy for the network and helps support the growth of aggregate network utility.

{% hint style="info" %}
Modifications to this system \(e.g. a 1 time right of refusal, monthly vs instantaneous transfers, etc.\) may be implemented at a later date. Modifications can be made to help limit the potential disruption and other user experience hurdles caused by forced transfers, but they should not undermine the core economic mechanisms and market dynamic.
{% endhint %}

### Auction Claim

When a land parcel reaches its expiration date \(i.e. the land holder's network fee deposits have run out\), it goes into a [Dutch auction](https://en.wikipedia.org/wiki/Dutch_auction). The auction price decreases linearly \(every second\) from the previous **For Sale Price** to zero over a two week period. This helps ensure open and efficient price discovery. When a parcel reaches the end of the auction period and has not been claimed, it simply remains free to claim \(excluding transaction costs\).

Prospective land holders can submit an auction claim at the current price to take control of the parcel. The land holder who let their license lapse will still receive the proceeds from the auction as part of the transaction \(so the penalty for accidental lapses aren't overly harsh\).

### Auction Rescue

When a parcel goes into auction, the previous land holder can reclaim their parcel from auction by making at least the minimum **Network Fee Payment** required. The land holder regains full rights to the parcel as long as this is done before someone else makes a successful auction claim.

