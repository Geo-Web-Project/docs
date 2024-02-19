---
description: >-
  The list of configurable parameters and current values used in the Geo Web
  land market that may be updated via governance.
---

# Network Parameters

The Geo Web [core contracts](../developers/core-contracts/) contain [numerous](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/PCOLicenseClaimerFacet.sol) [parameters](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/PCOLicenseParamsFacet.sol) that can be updated to adjust the dynamics of its [partial common ownership system](../concepts/partial-common-ownership). The founding team has set the initial values, but as the network evolves and external circumstances change, these values can be adjusted via governance available and appropriate for the time:

- Payment Token = ETHx
- Minimum For Sale Price = .005 ETHx per parcel
- Network Fee Rate = For Sale Price \* 10% per year
- Bid Rejection Penalty = Bid For Sale Price \* 10%
- Bid Response Window = 7 Days
- Reclaim (Foreclosure) Auction Length = 14 Days
- PCO Market Beneficiary Address = [0x5aD276439E3772FDb6696B6cB61401902D4e8b72](https://optimistic.etherscan.io/address/0x5ad276439e3772fdb6696b6cb61401902d4e8b72)
- Fair Launch Start/End Time = Thursday, December 15th, 2022, 17:00 UTC
- Fair Launch Start/End Bid = Saturday, January 14th, 2023, 17:00 UTC
- Geo Web Grid Size
  - \# of longitudinal lines = 2^23
  - \# of latitudinal lines = 2^22

The Geo Web's approach to [modularity and extensibility](../developers/core-contracts/standards-and-protocols/diamonds-multi-facet-proxy-eip-2535) means that changes to the PCO market and core contracts can go beyond changes to the parameters above. Such changes are likely to be less frequent and held to a higher hurdle for adoption.&#x20;
