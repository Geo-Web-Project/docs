---
description: Documentation of the BeneficiarySuperApp contract.
---

# BeneficiarySuperApp

## Summary

The `BeneficiarySuperApp` is the contract that accumulates [network funds](../../concepts/network-funds.md) from the Geo Web's land market (claim fees, network fees, and rejection penalties).

These funds will be transferred out in batches in a process controlled by the community multi-sig initially. Eventually, the programmability of streams can be utilized to fund initiatives in real-time.

The `BeneficiarySuperApp` is also utilized to keep track of the last deletion time of network fee payment streams for parcels. It uses [Superfluid's Super App construction](https://docs.superfluid.finance/superfluid/developers/super-apps).

## Code

[`BeneficiarySuperApp.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/beneficiary/BeneficiarySuperApp.sol)

