---
description: A guide for setting up email notifications for Geo Web parcel transactions
---

# Parcel Monitoring & Notifications

The Geo Web's [partial common ownership](../concepts/partial-common-ownership.md) land market gives licensors 7 days to respond to incoming bids. To help avoid missing the response window after a rival bid, we suggest setting up notification emails for all the parcels in your portfolio.&#x20;

This guide will walk through how to use [Optimistic Etherscan](https://optimistic.etherscan.io/)'s _Watch List_ functionality to monitor all of your Geo Web parcels:

{% hint style="warning" %}
An Optimistic Etherscan account is required to use this functionality. If you don't have one yet, you can sign up for one here: [https://optimistic.etherscan.io/register](https://optimistic.etherscan.io/register).&#x20;

Use an email that you regularly monitor!
{% endhint %}

1. Log in to your Optimistic Etherscan account: [https://optimistic.etherscan.io/login](https://optimistic.etherscan.io/login)
2. Search for and navigate to the wallet address that currently holds the parcel(s) you want to monitor.
3. Click on the `Erc721 Token Txns` tab within the wallet.
4. Geo Web parcels will be displayed as `Geo Web Parcel License (GEOL)` tokens in this list.
5. Click on the value shown under `Txn Hash` that corresponds to the Geo Web parcel/GEOL token you want to set notifications for.

{% hint style="info" %}
If you don't know the `TokenID` of the parcel that you want to monitor, navigate to and click on the parcel on the [Cadastre](https://geoweb.land/).&#x20;

The `Parcel ID` displayed in the details window is the `TokenID` (in hexadecimal format). You can on the ID to open the corresponding GEOL token page on Optimistic Etherscan.
{% endhint %}

6. In the _ERC-20 Tokens Transferred_ section of the transaction page, click on the `To` address for the smaller of the two ETHx token transfers. This transfer corresponds to your stream buffer deposit.

<figure><img src="../.gitbook/assets/Claim Transaction.png" alt="Optimistic Etherscan transaction page with notation to help find the stream buffer deposit for a Geo Web land claim"><figcaption><p>Finding the stream buffer deposit on a Geo Web land claim</p></figcaption></figure>

7. Click on the address shown in the _Filtered by Token Holder_ section found in the middle of the page.&#x20;

<figure><img src="../.gitbook/assets/Filtered View.png" alt="Optimistic Etherscan filtered by address page with notation to help find the Geo Web parcel&#x27;s BeaconProxy address"><figcaption><p>The "Filtered By" address corresponds to the parcel's BeaconProxy contract</p></figcaption></figure>

8. This address/page corresponds to your parcel's to [BeaconDimaond](../developers/core-contracts/beacondiamond/) contract. It is the hub for any subsequent market transactions involving this parcel, so it is our target for monitoring.
9. Give your parcel's BeaconDiamond a custom name tag for easier tracking by clicking `Update?` in the _More Info_ section of the page. Use something short and descriptive for the best display results throughout Etherscan.

<figure><img src="../.gitbook/assets/BeconProxy.png" alt="Optimistic Etherscan page of a Geo Web parcel&#x27;s BeaconProxy contract - notations to give it a name tag &#x26; enable notifications"><figcaption><p>We made it! This contract address is the hub of transactions involving the parcel.</p></figcaption></figure>

10. Click the heart icon at the top-right of the _More Info_ section.
11. On the following notification setup screen, enter the parcel name for the `Description`, select `Notify on Incoming & Outgoing Txns`, and check the `Also Track ERC20 Token Transfers` option.

<figure><img src="../.gitbook/assets/Notifications.png" alt="Configuring the notifications settings to incoming, outgoing, and ERC20 tracking for Geo Web parcels"><figcaption><p>Naming and configuring your parcel monitoring notifications</p></figcaption></figure>

12. You will now receive notification emails when your parcel's `For Sale Price` is adjusted or a bid is placed on it.&#x20;
13. You can currently monitor up to 50 addresses for free, so repeat this process for your other parcels!

{% hint style="success" %}
The Superfluid [Dashboard](https://app.superfluid.finance/) & [Console](https://console.superfluid.finance/) are other great tools to track and visualize your Geo Web parcels + streams.&#x20;

**Warning:** Don't manually cancel your streams on the Superfluid Dashboard or your parcels will go into foreclosure!&#x20;
{% endhint %}
