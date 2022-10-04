---
description: Documentation for ERC721Facet contract.
---

# ERC721Facet

## Summary

The `ERC721Facet` contract implements the [ERC-721 Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721) for Geo Web land parcels.&#x20;

ERC-721 functions reside in this facet, but the state is held in the [`RegistryDiamond`](./) (per the [Diamonds specification](https://eips.ethereum.org/EIPS/eip-2535)).&#x20;

This facet "isn't aware" of the additional functionality in other facets used to implement land parcel definition or the partial common ownership ruleset.

## Code

[`ERC721Facet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/ERC721Facet.sol)

[`LibERC721.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibERC721.sol)

## Contract Functions

### ERC721Facet

#### initialize

```
function initialize(string initName, string initSymbol) external
```

#### supportsInterface

```
function supportsInterface(bytes4 interfaceId) public view virtual returns (bool)
```

_See {IERC165-supportsInterface}._

#### balanceOf

```
function balanceOf(address owner) external view returns (uint256)
```

_See {IERC721-balanceOf}._

#### ownerOf

```
function ownerOf(uint256 tokenId) external view returns (address)
```

_See {IERC721-ownerOf}._

#### name

```
function name() external view returns (string)
```

_See {IERC721Metadata-name}._

#### symbol

```
function symbol() external view returns (string)
```

_See {IERC721Metadata-symbol}._

#### tokenURI

```
function tokenURI(uint256 tokenId) external view returns (string)
```

_See {IERC721Metadata-tokenURI}._

#### approve

```
function approve(address to, uint256 tokenId) external
```

_See {IERC721-approve}._

#### getApproved

```
function getApproved(uint256 tokenId) external view returns (address)
```

_See {IERC721-getApproved}._

#### setApprovalForAll

```
function setApprovalForAll(address operator, bool approved) external
```

_See {IERC721-setApprovalForAll}._

#### isApprovedForAll

```
function isApprovedForAll(address owner, address operator) public view returns (bool)
```

_See {IERC721-isApprovedForAll}._

#### transferFrom

```
function transferFrom(address from, address to, uint256 tokenId) external
```

_See {IERC721-transferFrom}._

#### safeTransferFrom

```
function safeTransferFrom(address from, address to, uint256 tokenId) external
```

_See {IERC721-safeTransferFrom}._

#### safeTransferFrom

```
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) public
```

_See {IERC721-safeTransferFrom}._

### LibERC721

#### STORAGE\_POSITION

```
bytes32 STORAGE_POSITION
```

#### Transfer

```
event Transfer(address from, address to, uint256 tokenId)
```

_Emitted when `tokenId` token is transferred from `from` to `to`._

#### Approval

```
event Approval(address owner, address approved, uint256 tokenId)
```

_Emitted when `owner` enables `approved` to manage the `tokenId` token._

#### ApprovalForAll

```
event ApprovalForAll(address owner, address operator, bool approved)
```

_Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets._

#### DiamondStorage

```
struct DiamondStorage {
  string name;
  string symbol;
  mapping(uint256 => address) owners;
  mapping(address => uint256) balances;
  mapping(uint256 => address) tokenApprovals;
  mapping(address => mapping(address => bool)) operatorApprovals;
}
```

#### diamondStorage

```
function diamondStorage() internal pure returns (struct LibERC721.DiamondStorage ds)
```

#### ownerOf

```
function ownerOf(uint256 tokenId) internal view returns (address)
```

_See {IERC721-ownerOf}._

#### isApprovedForAll

```
function isApprovedForAll(address owner, address operator) internal view returns (bool)
```

_See {IERC721-isApprovedForAll}._

#### getApproved

```
function getApproved(uint256 tokenId) internal view returns (address)
```

_See {IERC721-getApproved}._

#### \_safeTransfer

```
function _safeTransfer(address from, address to, uint256 tokenId, bytes data) internal
```

\_Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked.

`data` is additional data, it has no specified format and it is sent in call to `to`.

This internal function is equivalent to {safeTransferFrom}, and can be used to e.g. implement alternative mechanisms to perform token transfer, such as signature-based.

Requirements:

* `from` cannot be the zero address.
* `to` cannot be the zero address.
* `tokenId` token must exist and be owned by `from`.
* If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.

Emits a {Transfer} event.\_

#### \_exists

```
function _exists(uint256 tokenId) internal view returns (bool)
```

\_Returns whether `tokenId` exists.

Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.

Tokens start existing when they are minted (`_mint`), and stop existing when they are burned (`_burn`).\_

#### \_isApprovedOrOwner

```
function _isApprovedOrOwner(address spender, uint256 tokenId) internal view returns (bool)
```

\_Returns whether `spender` is allowed to manage `tokenId`.

Requirements:

* `tokenId` must exist.\_

#### \_safeMint

```
function _safeMint(address to, uint256 tokenId) internal
```

\_Safely mints `tokenId` and transfers it to `to`.

Requirements:

* `tokenId` must not exist.
* If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.

Emits a {Transfer} event.\_

#### \_safeMint

```
function _safeMint(address to, uint256 tokenId, bytes data) internal
```

\_Same as {xref-ERC721-_safeMint-address-uint256-}\[`_safeMint`], with an additional `data` parameter which is forwarded in {IERC721Receiver-onERC721Received} to contract recipients._

#### \_mint

```
function _mint(address to, uint256 tokenId) internal
```

\_Mints `tokenId` and transfers it to `to`.

WARNING: Usage of this method is discouraged, use {\_safeMint} whenever possible

Requirements:

* `tokenId` must not exist.
* `to` cannot be the zero address.

Emits a {Transfer} event.\_

#### \_transfer

```
function _transfer(address from, address to, uint256 tokenId) internal
```

\_Transfers `tokenId` from `from` to `to`. As opposed to {transferFrom}, this imposes no restrictions on msg.sender.

Requirements:

* `to` cannot be the zero address.
* `tokenId` token must be owned by `from`.

Emits a {Transfer} event.\_

#### \_approve

```
function _approve(address to, uint256 tokenId) internal
```

\_Approve `to` to operate on `tokenId`

Emits an {Approval} event.\_

#### \_setApprovalForAll

```
function _setApprovalForAll(address owner, address operator, bool approved) internal
```

\_Approve `operator` to operate on all of `owner` tokens

Emits an {ApprovalForAll} event.\_

#### \_requireMinted

```
function _requireMinted(uint256 tokenId) internal view
```

_Reverts if the `tokenId` has not been minted yet._

#### \_checkOnERC721Received

```
function _checkOnERC721Received(address from, address to, uint256 tokenId, bytes data) private returns (bool)
```

_Internal function to invoke {IERC721Receiver-onERC721Received} on a target address. The call is not executed if the target address is not a contract._

**Parameters**

| Name    | Type    | Description                                                   |
| ------- | ------- | ------------------------------------------------------------- |
| from    | address | address representing the previous owner of the given token ID |
| to      | address | target address that will receive the tokens                   |
| tokenId | uint256 | uint256 ID of the token to be transferred                     |
| data    | bytes   | bytes optional data to send along with the call               |

**Return Values**

| Name | Type | Description                                                       |
| ---- | ---- | ----------------------------------------------------------------- |
| \[0] | bool | bool whether the call correctly returned the expected magic value |
