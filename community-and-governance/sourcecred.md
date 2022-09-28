---
description: A tool for measuring and rewarding value creation on the Geo Web project.
---

# SourceCred

One of the early tools that we've relied on most heavily to support the Geo Web's [open organizational vision](open-org.md) is [SourceCred](https://sourcecred.io/).&#x20;

SourceCred is a tool for communities to measure and reward value creation. It uses an algorithm and customizable weights to assign an accumulating score ("Cred") to community member actions. It integrates with a number of popular organizational/development tools (Github, Discord, Discourse, and more to come) in an attempt to capture a broad, but nuanced picture of project contributions and contributors.&#x20;

> "\[That] Cred flows from the contribution to all the people and other contributions that supported it. In this way, you can imagine how a project could be represented as a "node graph" made up of contribution and people dots (aka "nodes") connected by lines (aka "edges") that flow Cred around to the nodes based on what supported what." - [SourceCred Introduction Docs](https://sourcecred.io/docs)

A high Cred balance indicates that a contributor has added a lot of value to the project (Cred is non-transferrable). Cred holders can be regularly rewarded for their contributions with distributions of a project-specific digital currency (i.e. it has monetary value) called Grain.

The Geo Web project uses SourceCred to monitor our [Github repositories](https://github.com/Geo-Web-Project), [Discord server](https://discord.com/invite/reXgPru7ck), and [Discourse Forum](https://forum.geoweb.network/). Pull requests, reviews, mentions, comments, and community discussion can all earn Cred. The more that an action is referenced, reacted to (i.e. emojis), and generally engaged with, the more Cred it will accrue. In practice, it's as easy as asking a question in Discord that sparks a response to earn Cred.

The current Geo Web admins ([@codynhat](https://github.com/codynhat) & [@gravenp](https://github.com/gravenp)) have configured weights for various actions and platforms in an attempt to faithfully recognize value creation on the project. [The project's SourceCred instance](https://github.com/Geo-Web-Project/sourcecred-instance) mostly runs on an automated basis, but the admins will adjust the weights over time to account for unintended anomalies and gaming of the system.

The project currently runs a small, weekly Grain distribution. The distribution is weighted 75% to immediate contributions (last week) and 25% toward balancing recent contributions (weekly decay for each week back). 1 Grain on the Geo Web is equivalent to 1 USD equivalent. The [public Geo Web SourceCred dashboard ](https://geo-web-project.github.io/sourcecred-instance/#/explorer)shows the project's Cred and Grain distributions to date.

{% hint style="warning" %}
Grain distributions are considered a taxable event, so Grain is only distributed to Cred holders who have opted in. Please reach out to one of the admins on Discord to opt in.
{% endhint %}

Grain distributions are currently funded by the generosity of the supporters of the [Geo Web Gitcoin Grant](https://gitcoin.co/grants/1403/the-geo-web) :pray:. Upon mainnet launch, it is envisioned that some portion of network fees will be allocated toward the core development and community building activities which SourceCred helps recognize and reward.

The goal is for SourceCred to become one of the several credibly neutral mechanisms which reward Geo Web stakeholders for helping advance the project.&#x20;
