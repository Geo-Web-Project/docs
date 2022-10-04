---
description: Documentation for the CFABasePCOFacet contract.
---

# CFABasePCOFacet

## Summary

The `CFABasePCOFacet` implements the functions required for the current licensor of a parcel to manage their `For Sale Price,`corresponding network fee stream, and required buffer deposit according to the [PCO market](../../../concepts/partial-common-ownership.md) and [Superfluid](https://docs.superfluid.finance/superfluid/developers/constant-flow-agreement-cfa) requirements.

## Code

[`CFABasePCOFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/facets/CFABasePCOFacet.sol)

[`LibCFABasePCO.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/libraries/LibCFABasePCO.sol)

[`IBasePCO.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/interfaces/IBasePCO.sol)``

``[`ICFABiddable.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/interfaces/ICFABiddable.sol)

## Contract Functions

### CFABasePCOFacet

Handles basic PCO functionality using Constant Flow Agreement (CFA)

#### PayerContributionRateUpdated

```
event PayerContributionRateUpdated(address _payer, int96 contributionRate)
```

Emitted when an owner bid is updated

#### initializeBid

```
function initializeBid(contract ICFABeneficiary beneficiary, contract IPCOLicenseParamsStore paramsStore, contract IERC721 initLicense, uint256 initLicenseId, address bidder, int96 newContributionRate, uint256 newForSalePrice) external
```

Initialize bid. - Must be the contract owner - Must have payment token buffer deposited - Must have permissions to create flow for bidder

**Parameters**

| Name                | Type                            | Description                                                                        |
| ------------------- | ------------------------------- | ---------------------------------------------------------------------------------- |
| beneficiary         | contract ICFABeneficiary        |                                                                                    |
| paramsStore         | contract IPCOLicenseParamsStore | Global store for parameters                                                        |
| initLicense         | contract IERC721                | Underlying ERC721 license                                                          |
| initLicenseId       | uint256                         | Token ID of license                                                                |
| bidder              | address                         | Initial bidder                                                                     |
| newContributionRate | int96                           | New contribution rate for bid                                                      |
| newForSalePrice     | uint256                         | Intented new for sale price. Must be within rounding bounds of newContributionRate |

#### payer

```
function payer() external view returns (address)
```

Current payer of license

#### contributionRate

```
function contributionRate() external view returns (int96)
```

Current contribution rate of payer

#### forSalePrice

```
function forSalePrice() external view returns (uint256)
```

Current price needed to purchase license

#### licenseId

```
function licenseId() external view returns (uint256)
```

License Id

#### license

```
function license() external view returns (contract IERC721)
```

License

#### isPayerBidActive

```
function isPayerBidActive() external view returns (bool)
```

Is current bid actively being paid

#### currentBid

```
function currentBid() external pure returns (struct LibCFABasePCO.Bid)
```

Get current bid

### LibCFABasePCO

#### STORAGE\_POSITION

```
bytes32 STORAGE_POSITION
```

#### STORAGE\_POSITION\_CUR\_BID

```
bytes32 STORAGE_POSITION_CUR_BID
```

#### STORAGE\_POSITION\_CFA

```
bytes32 STORAGE_POSITION_CFA
```

#### Bid

```
struct Bid {
  uint256 timestamp;
  address bidder;
  int96 contributionRate;
  uint256 perSecondFeeNumerator;
  uint256 perSecondFeeDenominator;
  uint256 forSalePrice;
}
```

#### DiamondStorage

```
struct DiamondStorage {
  contract IPCOLicenseParamsStore paramsStore;
  contract IERC721 license;
  uint256 licenseId;
  contract ICFABeneficiary beneficiary;
}
```

#### DiamondCFAStorage

```
struct DiamondCFAStorage {
  struct CFAv1Library.InitData cfaV1;
}
```

#### PayerContributionRateUpdated

```
event PayerContributionRateUpdated(address _payer, int96 contributionRate)
```

Emitted when an owner bid is updated

#### PayerForSalePriceUpdated

```
event PayerForSalePriceUpdated(address _payer, uint256 forSalePrice)
```

Emitted when for sale price is updated

#### diamondStorage

```
function diamondStorage() internal pure returns (struct LibCFABasePCO.DiamondStorage ds)
```

#### \_currentBid

```
function _currentBid() internal pure returns (struct LibCFABasePCO.Bid bid)
```

_Store currentBid in separate position so struct is upgradeable_

#### cfaStorage

```
function cfaStorage() internal pure returns (struct LibCFABasePCO.DiamondCFAStorage ds)
```

_Store cfa in separate position so struct is upgradeable_

#### \_getBeneficiary

```
function _getBeneficiary() internal view returns (address)
```

_Get beneficiary or default if not set_

#### \_checkForSalePrice

```
function _checkForSalePrice(uint256 forSalePrice, int96 contributionRate, uint256 _perSecondFeeNumerator, uint256 _perSecondFeeDenominator) internal pure returns (bool)
```

#### \_contributionRate

```
function _contributionRate() internal view returns (int96)
```

#### \_isPayerBidActive

```
function _isPayerBidActive() internal view returns (bool)
```

#### \_createBeneficiaryFlow

```
function _createBeneficiaryFlow(int96 newContributionRate) internal
```

#### \_editBid

```
function _editBid(int96 newContributionRate, uint256 newForSalePrice) internal
```

### IBasePCO

#### PayerForSalePriceUpdated

```
event PayerForSalePriceUpdated(address _payer, uint256 forSalePrice)
```

Emitted when for sale price is updated

#### payer

```
function payer() external view returns (address)
```

Current payer of license

#### forSalePrice

```
function forSalePrice() external view returns (uint256)
```

Current for sale price of license

#### licenseId

```
function licenseId() external view returns (uint256)
```

License Id

#### license

```
function license() external view returns (contract IERC721)
```

License

### ICFABiddable

#### BidPlaced

```
event BidPlaced(address _bidder, int96 contributionRate, uint256 forSalePrice)
```

Emitted when for sale price is updated

#### editBid

```
function editBid(int96 newContributionRate, uint256 newForSalePrice) external
```

Edit bid

**Parameters**

| Name                | Type    | Description                                                                        |
| ------------------- | ------- | ---------------------------------------------------------------------------------- |
| newContributionRate | int96   | New contribution rate for bid                                                      |
| newForSalePrice     | uint256 | Intented new for sale price. Must be within rounding bounds of newContributionRate |

#### placeBid

```
function placeBid(int96 newContributionRate, uint256 newForSalePrice) external
```

Place a bid to purchase license as msg.sender

**Parameters**

| Name                | Type    | Description                                                                        |
| ------------------- | ------- | ---------------------------------------------------------------------------------- |
| newContributionRate | int96   | New contribution rate for bid                                                      |
| newForSalePrice     | uint256 | Intented new for sale price. Must be within rounding bounds of newContributionRate |

\
