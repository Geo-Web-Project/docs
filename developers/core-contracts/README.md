---
description: Documentation for the core of the Geo Web protocol.
---

# Core Contracts

The Geo Web’s core smart contracts define the network’s digital land asset structure and market operations. They are the foundation on which all other aspects of the Geo Web are built.

Due to this central importance and the inherent nature of smart contracts, the Geo Web's design approach prioritizes security, scalability, and modularity.&#x20;

Augmented reality and blockchain are nascent industries with many learnings and breakthroughs yet to come. The Geo Web must maintain extensibility without undermining its credible neutrality and the attributes that make smart contracts so powerful.

Broadly speaking, we want to make it easy for stakeholders to read, understand, and build upon the contracts. We want to leverage standards and designs that allow upgradability with [constant time operations](https://en.wikipedia.org/wiki/Time\_complexity#Constant\_time). We want to allow aspects of the contracts to be replaced while minimizing migration costs because every decision made now can become the wrong one in the future.

The Geo Web's contracts use and are inspired by several design patterns and protocols in pursuit of these goals:

* [Diamonds, Multi-Facet Proxy (EIP-2535)](standards-and-protocols/diamonds-multi-facet-proxy-eip-2535.md)
* [Beacon Proxy](standards-and-protocols/beacon-proxy.md)
* [Superfluid protocol](standards-and-protocols/superfluid.md)&#x20;

The resulting contracts are detailed in the following sections:

* [RegistryDiamond](registrydiamond.md)
  * [ERC721Facet](erc721facet.md)
  * [GeoWebParcelFacet](geowebparcelfacet/)
  * [PCOLicenseClaimerFacet](pcolicenseclaimerfacet.md)
  * [PCOLicenseParamsFacet](pcolicenseparamsfacet.md)
* [PCOLicenseBeacon](pcolicensebeacon.md)
* [BeaconDiamond](beacondiamond.md)
* [CFABasePCOFacet](cfabasepcofacet.md)
* [CFAPenaltyBidFacet](cfapenaltybidfacet.md)
* [CFAReclaimerFacet](cfareclaimerfacet.md)
* DiamondCut
* [BeneficiarySuperApp](beneficiarysuperapp.md)
