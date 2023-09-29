# Network Funds Allocation

**Last Update: August 15th, 2023**

:::info
Help shape the direction of the Geo Web and participate in governance on our [forum](https://forum.geoweb.network/).
:::

The Geo Web generates [network funds](../concepts/network-funds.md) from its [partial common ownership](../concepts/partial-common-ownership.md) land market. These funds are designated to be invested into public goods and the creation of positive-sum outcomes.&#x20;

_How_ these funds are best allocated will be a perpetual challenge. There are many exciting ideas to explore and experiments to run.

In order to help maximize open participation in allocation decisions, network funds are initially, exclusively being used to fund matching pools for [quadratic matching rounds](https://wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000).&#x20;

This also limits core contract complexity and the exercise of centralized authority for the [Geo Web multi-sig](governance-at-launch.md). The signers will simply be responsible for periodically transferring network funds from the Safe to quadratic matching pool address(es) and/or validated distribution contracts which to reflect the will of the community.

The first of [these protocol-funded quadratic funding rounds was run from July 17th to July 31st, 2023](https://explorer.gitcoin.co/#/round/10/0x3e92c56dac4a262efcafce7a78381622092754fd). The round was open to public goods projects and builders in the open-source spatial computing and/or Geo Web ecosystem. It [distributed 4 ETH in matching funds](https://optimistic.etherscan.io/tx/0x3075f1b6d3f2839cd65f97d63ce5f5a5782882a03836311941f8c4d9f554dd05) across six projects (2 ETH was from the [PCO land market](../concepts/partial-common-ownership.md) & 2 ETH was contributed to the pool by the Geo Web core team via grant funds).

:::note
_Geo Web + Spatial Computing Public Goods Quadratic Funding Results_ (aka Geo Web QF #1) - July 2023

- Geo Web Core Contributors - 1.1092 ETH
- PLAY TO LEARN - WTF is Partial Common Ownership - 0.8106 ETH
- Geo Web Security Bounty Program - 0.7704 ETH
- Geo Web Open Contributor Fund - 0.5774 ETH
- Splant - 0.5602 ETH
- Archly - 0.1723 ETH
  :::

The Geo Web was the first community to run a self-serve QF round on the [Gitcoin Grant Stack](https://www.gitcoin.co/grants-stack). The round utilized a [Gitcoin Passport](https://passport.gitcoin.co/#/) score of >=20 and a minimum donation of 1 USD equivalent as the eligibility criteria for inclusion in the matching calculation. The matching cap for a single grantee was 50% of the pool.&#x20;

The [Geo Web multi-sig](governance-at-launch.md) reviewed the round results for accuracy with the Grants Stack team before final distribution, but in accordance with their signer responsibilities/commitments did not deviate from the initial matching criteria thresholds.&#x20;

This resulted in some very nearly eligible contributions (just under 1 USD and/or made by _likely_ unique humans with Passport scores of not quite 20) not being included in the final matching calculation. In the pursuit of better capturing the democratic voice of the community, it may make sense for future quadratic funding rounds to be launched with established, transparent rules to "round up" criteria scores.

This was just the first of many network funding allocation experiments on the Geo Web (and not just quadratic funding!). Other considerations and details that should be continually iterated upon with input from the broader community before QF Round #2 include:

- **Round Cadence** - Currently, the target is quarterly, but that may change based on the rate of accumulation of network fees. We are also exploring "streaming quadratic funding" mechanisms.
- **Round Structure** - As the matching pool grows, it may make sense to establish side rounds, geographic rounds, etc. The length of the application period and funding period may also change.&#x20;
- **Technical Infrastructure** - Gitcoin's Grants Stack offers a zero-code deployment and management of QF rounds, but there are differentiated alternatives. [Clr.fund](https://clr.fund/#/)'s [MACI-based QF solution](https://clr.fund/#/about/maci) is promising.
- **Recipient Eligibility** - Criteria for what qualifies as a public good and round-specific eligibility must be established and enforced. Should _any_ public good qualify or should work be directly related to the Geo Web? Can projects with VC-backing or tokens be eligible? By who and how should these eligibility criteria be evaluated?
- **Matching Eligibility** - Directly contributing to public goods grants should always be permissionless, but QF relies on Sybil-resistance tools (i.e. matching eligibility requirements) to be effective. The arms race against Sybil collusion will always play a big role in round design and infrastructure.
