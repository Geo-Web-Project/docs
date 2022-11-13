---
description: Documentation for PCOERC721Facet contract.
---

# PCOERC721Facet

## Summary

The `PCOERC721Facet` contract implements the [ERC-721 Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721) for Geo Web land parcels.&#x20;

ERC-721 functions reside in this facet, but the state is held in the [`RegistryDiamond`](./) (per the [Diamonds specification](https://eips.ethereum.org/EIPS/eip-2535)).&#x20;

This facet "isn't aware" of the additional functionality in other facets used to implement land parcel definition or the partial common ownership ruleset.

## Code

[`PCOERC721Facet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/PCOERC721Facet.sol)

## Contract Functions

### PCOERC721Facet

#### onlyOwner

```solidity
modifier onlyOwner()
```

#### initializeERC721

```solidity
function initializeERC721(string name, string symbol, string baseURI) external
```

#### \_isApprovedOrOwner

```solidity
function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool)
```

\_Override _isApprovedOrOwner to include corresponding beacon proxy_

#### \_beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual
```

ERC721 hook, called before all transfers including mint and burn

_function should be overridden and new implementation must call super_

**Parameters**

| Name    | Type    | Description             |
| ------- | ------- | ----------------------- |
| from    | address | sender of token         |
| to      | address | receiver of token       |
| tokenId | uint256 | id of transferred token |
