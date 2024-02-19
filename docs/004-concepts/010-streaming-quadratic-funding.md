---
slug: /concepts/streaming-quadratic-funding
description: >-
  An introduction to streaming quadratic funding--a real-time public goods funding allocation mechanism pioneered by the Geo Web, Superfluid, & Gitcoin Allo.
---

# Streaming Quadratic Funding

:::info
Participate in the first-ever Streaming Quadratic Funding round from February 21 to April 21st, 2024 at [https://geoweb.land/governance](https://geoweb.land/governance)
:::

Streaming quadratic funding (SQF) is a supercharged implementation of [quadratic funding (QF)](https://www.wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000)—the public goods funding mechanism popularized in web3 by [Gitcoin](https://gitcoin.co/).

Rather than discrete donations and payouts at the end of the round, SQF uses donation streams (i.e. continuous per-second transfers) and real-time quadratic matching streams.

SQF can be thought of as running a full quadratic matching round every second, perpetually. Removing time discontinuities from quadratic funding can transform the grantee & donor experience, amplify the impact of public goods funding, and promote governance composability without sacrificing efficiency.

The Geo Web, in partnership with Gitcoin and Superfluid, is operating the first SQF pilot round from February 21st to April 21st, 2024.

## Quickstart Requirements

- [An Ethereum Wallet](https://www.optimism.io/apps/wallets)
  - [Connect to the Optimism Network (Chain ID = 10)](https://chainlist.org/chain/10)
- ETH (on Optimism)
  - [Bridge](https://app.hop.exchange/#/send?sourceNetwork=ethereum&destNetwork=optimism&token=ETH), [transfer from an exchange](https://help.optimism.io/hc/en-us/articles/10800854161563-Centralized-exchanges-that-support-Optimism), or [use a direct onramp](https://global.transak.com/?defaultCryptoCurrency=ETH&network=OPTIMISM)
    - Always maintain a balance to pay for transactions (Typically between $0.10 ~ $0.50)
    - You'll need the equivalent of $2 in ETH to mint your [onchain Gitcoin Passport](https://passport.gitcoin.co/).
    - Your ETH balance can also be used to donate to the matching pool.
- DAI (on Optimism)
  - [Swap ETH for DAI](https://swap.defillama.com/?chain=optimism&from=0x0000000000000000000000000000000000000000&to=0xda10009cbd5d07dd0cecc66161fc93d7c9000da1)
    - DAI is used to donate to/vote for grantees.
- An onchain Gitcoin Passport (Score \> 3)
  - [Passport Dashboard](https://passport.gitcoin.co/#/dashboard)
    - Connect your wallet & collect stamps to earn more than 3 points ([Instructions](https://support.gitcoin.co/gitcoin-knowledge-base/gitcoin-passport/what-are-stamps))
    - Bring Your Passport Onchain by clicking the button near the bottom of the dashboard ([Instructions](https://support.gitcoin.co/gitcoin-knowledge-base/gitcoin-passport/moving-your-stamps-onchain))

## Ways to Contribute

### Direct Donations

Crowdfunded donations are the lifeblood of any quadratic funding round. Each donation functions as a vote for how the matching pool funds are allocated

QF matching functions as a force multiplier in funding the things you care about. SQF makes that impact immediate. Every stream you open to a grantee will automatically and immediately increase the grantee's matching stream.

In the SQF pilot, direct donations take the form of streams of DAI.

To open or edit an existing stream, click on the green `Donate` button of the grantee of your choice, and then complete each of the steps in the checkout widget:

1. Edit the value of our donation stream
2. Wrap DAI to DAIx for streaming (as needed)
  - The widget defaults to wrapping 3 months of DAI for your new stream value, but you can edit the value or entirely skip wrapping if you already have DAIx. You need to keep a balance of DAIx \>0 to avoid your streams being closed and forfeiting a small deposit.
3. Bring a valid Gitcoin Passport onchain (one-time)
  - You need an onchain Passport score greater than 3. [Follow the instructions here](https://support.gitcoin.co/gitcoin-knowledge-base/gitcoin-passport/moving-your-stamps-onchain).
4. Review and submit your transaction(s)
  - Make note of the impact on your token balances, current estimated zero balance date, and quadratic matching impact (!) before finalizing your transaction(s).

### Quadratic Matching Stream

Quadratic matching pools are typically funded by ecosystems, protocols, and large benefactors. These funders are looking to tap into the collective intelligence of the market of individual donors to allocate their funds effectively.

The SQF matching pool is initially funded by the Geo Web's PCO land market and [a generous 5 ETH grant from Public Nouns](https://publicnouns.wtf/vote), but anyone can permissionlessly support the round (and public goods funding experimentation) too!

A donation stream of ETH to the SQF pilot pool will increase the matching allocation for all grantees!

To open or edit an existing matching pool stream, click on the green `Donate` button of the Quadratic Matching channel on the left of the diagram. Complete each of the steps in the checkout widget:

1. Edit the value of our donation stream
2. Wrap ETH to ETHx for streaming (as needed)
  - The widget defaults to wrapping 3 months of ETH for your new stream value, but you can edit or entirely skip wrapping if you already have ETHx. You need to keep a balance of ETHx \>0 to avoid your stream being closed and forfeiting a small deposit. Don't forget to leave enough ETH for transaction gas.
3. Review and submit your transaction(s)
  - Make note of the impact on your token balances, current estimated zero balance date, and quadratic matching impact (!) before finalizing your transaction(s).

## Streaming Quadratic Matching

How the grantee matching streams in SQF instantaneously reflect each donation stream is almost like magic. A single transaction can update tens or even hundreds of streams without exploding transaction costs.

It is achieved with [Superfluid's Streaming Distribution](https://docs.superfluid.finance/docs/concepts/overview/distributions) primitive and the [Gitcoin Allo](https://allo.gitcoin.co/) protocol.

When a direct donation steam is opened (or updated), the grantee's [pool membership units](https://docs.superfluid.finance/docs/protocol/distributions/guides/pools#about-member-units) will be updated according to the quadratic matching formula:

This magic is only possible in web3.