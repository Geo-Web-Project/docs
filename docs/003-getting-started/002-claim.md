---
slug: /getting-started/claim
description: Step-by-step instructions for making Geo Web parcel claims
---

# How to claim Geo Web land

:::tip
**OP incentives for Geo Web land claims are live for a limited time!** [Details here.](https://www.geoweb.network/post/op-incentives)
:::

:::info
**Reminder: All parcel claims require an upfront payment of 0.005 ETHx**. Your ongoing fee stream is variable based on your `For Sale Price`. [All funds go to supporting public goods!](../concepts/network-funds)
:::

Geo Web land parcels can be claimed around the globe via the [Cadastre (https://geoweb.land)](https://geoweb.land/) user interface.&#x20;

The market uses concepts/tools like [partial common ownership](../concepts/partial-common-ownership) and streaming payments (via [Superfluid](https://www.superfluid.finance/)) on the Optimism L2 ETH roll-up network that even experienced web3 users may not have previously encountered.&#x20;

So once you have all the [quick start requirements](./quickstart) covered, follow this guide to get comfortable making your first Geo Web land claim!

1\. Navigate to the Geo Web Cadastre ([https://geoweb.land/](https://geoweb.land/) or [https://cadastre.eth.limo/](https://cadastre.eth.limo/)). **Connect your web3 wallet**.

<figure><img src="/assets/Cadastre Landing.png" alt="View of the Earth on the Geo Web Cadastre"/><figcaption><p>The whole world is at your fingertips on the Cadastre.</p></figcaption></figure>

2\. Search for, zoom, and/or pan to the location where you want to make a parcel claim. **Click once on the map to start a claim.**

3\. **Drag and resize the rectangle then confirm your desired claim shape**. You can still pan the map if needed by clicking and dragging outside the rectangle. [Parcels are currently limited](../developers/core-contracts/registrydiamond/geowebparcelfacet/) to rectangles with 3,000 or fewer [Coordinates](../developers/core-contracts/registrydiamond/geowebparcelfacet/geo-web-coordinates). Parcels also cannot exceed 200 coordinates North-to-South or East-to-West:

<figure><img src="/assets/Claim Start (1).png" alt="View of the start of a parcel claim on the Geo Web near the Eiffel tower."/><figcaption><p>Starting a parcel claim. Pending parcel claims show as yellow rectangles in the Geo Web Coordinate grid.</p></figcaption></figure>

4\. Once your parcel shape is locked in, you can **enter a name and URI link** for your parcel in the _Transaction Panel_. These are optional content fields that can be displayed to users that visit your parcel:

<figure><img src="/assets/Parcel Name.png" alt="A view of a fair launch claim on the Geo Web at the Eiffel Tower with user entry of a name &#x26; URI link to the parcel."/><figcaption><p>Giving your parcel a name and URI link are two extremely simple <a href="../developers/content-layer/">content-linking</a> use cases for Geo Web parcels.</p></figcaption></figure>

5\. **Enter your `For Sale Price` (in ETHx) for the parcel**. This value should represent the price that you would be willing to sell this parcel for (it can be adjusted later). It must be greater than or equal to the flat claim fee of 0.005 ETHx:

<figure><img src="/assets/Min Claim Price.png" alt="Entering the For Sale Price during a fair launch claim on the Geo Web--the value entered must be greater than the current auction bid."/><figcaption><p>All claims require a 0.005 ETHx registration payment. We don't let price your parcel for less than that!</p></figcaption></figure>

6\. The ongoing `Network Fee` you are required to pay is proportional to the `For Sale Price` that you enter. This is a key requirement of [partial common ownership](../concepts/partial-common-ownership). You'll pay these `Network Fees` by opening and maintaining a per-second ETHx stream to the Geo Web treasury. **The **_**Transaction Summary**_** shows the details of the three payment components required to make your claim: the fixed claim payment (0.005 ETHx), an ongoing payment stream, & a** [**stream buffer**](https://help.superfluid.finance/en/articles/5744874-how-do-stream-buffers-work-in-superfluid)**.**&#x20;

<figure><img src="/assets/Transaction Summary.png" alt=""/><figcaption><p>Network Fees are proportional to entered For Sale Price and are paid via an ETHx steam. They are collected in addition to the one-time claim payment.</p></figcaption></figure>

7\. All payments and streams in the Geo Web land market are made in ETHx—[a super token-wrapped version of ETH](https://docs.superfluid.finance/superfluid/protocol-overview/in-depth-overview/super-tokens). If you don't have **enough ETHx to complete the claim transaction AND maintain a non-zero balance** for a reasonable period of time (streams deduct from your balance every second!), then **you can **_**Wrap ETH to ETHx**_** by clicking the purple button in the **_**Transaction Panel**_** and submitting a transaction with the desired value in the modal.** Make sure to leave enough ETH to pay for gas on multiple transactions!

<figure><img src="/assets/Wrap ETH.png" alt=""/><figcaption><p>The Wrap ETH to ETHX modal allows you to prepare your ETH for use in the Geo Web's streaming payment land market. Make sure to maintain a non-zero ETHx balance so your streams &#x26; parcels aren't foreclosed!</p></figcaption></figure>

8\. ETHx is an ERC-20 extension token. Token spend allowances and streams must be explicitly authorized to complete your claim. **Click the dynamic teal **_**Allow...**_** button to authorize the required one-time token transfers (claim payment, stream buffer) and stream (Network Fees).** The triggered transaction(s) in your web3 wallet must be accepted and confirmed on-chain before proceeding. For security purposes, the default value should be used to only authorize the exact amounts needed to complete the claim:&#x20;

<figure><img src="/assets/Authorize ETHx.png" alt=""/><figcaption><p>The teal "Allow" button will show the authorization transactions required for the claim and their progress as you complete them in your web3 wallet.</p></figcaption></figure>

9\. After all required authorization transactions are confirmed, the Claim button will be enabled. **Click the green **_**Claim**_** button in the **_**Transaction Panel**_**.** Review and confirm the transaction in your web3 wallet to complete the claim.

<figure><img src="/assets/Claim.png" alt=""/><figcaption><p>This parcel is ready to be claimed! </p></figcaption></figure>

10\. **Success! You are a Geo Web landholder.** Once your claim transaction is confirmed on-chain, the Cadastre will fetch these updates from the Geo Web subgraph and content layer and display the new state (have a bit of patience with the web3 stack). **You can now begin linking content to your parcel via the Media Gallery. You may also return to the parcel to edit your **_**For Sale Price**_** and **_**Network Fee**_** streams as needed:**

<figure><img src="/assets/Grant Park.png" alt=""/><figcaption><p>This user now controls this space on the Geo Web at Grant Park!</p></figcaption></figure>
