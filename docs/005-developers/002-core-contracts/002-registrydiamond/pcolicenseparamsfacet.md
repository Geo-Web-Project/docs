---
description: Documentation for the PCOLicenseParamsFacet contract.
---

# PCOLicenseParamsFacet

## Summary

The `PCOLicenseParamsFacet` sets global parameters for the Geo Web land market.

Parameters include:

* Beneficiary address for network fees, claim payments, & penalty fees
* Payment token
* Minimum `For Sale Price`
* Network fee rate
* Bid rejection penalty rate
* Bid review period rate
* Reclaim Dutch auction length

This contract is upgradeable so that parameters can be updated via governance when appropriate.

## Code

[`PCOLicenseParamsFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/facets/PCOLicenseParamsFacet.sol)

[`LibPCOLicenseParams.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibPCOLicenseParams.sol)

[`IPCOLicenseParamsStore.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/interfaces/IPCOLicenseParamsStore.sol)

## Contract Functions

### PCOLicenseParamsFacet

#### onlyOwner

```solidity
modifier onlyOwner()
```

#### initializeParams

```solidity
function initializeParams(contract ICFABeneficiary beneficiary, contract ISuperToken paymentToken, contract ISuperfluid host, uint256 perSecondFeeNumerator, uint256 perSecondFeeDenominator, uint256 penaltyNumerator, uint256 penaltyDenominator, uint256 bidPeriodLengthInSeconds, uint256 reclaimAuctionLength, uint256 minForSalePrice) external
```

Initialize. - Must be the contract owner

**Parameters**

| Name                     | Type                     | Description                                                      |
| ------------------------ | ------------------------ | ---------------------------------------------------------------- |
| beneficiary              | contract ICFABeneficiary | Beneficiary of funds.                                            |
| paymentToken             | contract ISuperToken     | Payment token.                                                   |
| host                     | contract ISuperfluid     | Superfluid host                                                  |
| perSecondFeeNumerator    | uint256                  | The numerator of the network-wide per second contribution fee.   |
| perSecondFeeDenominator  | uint256                  | The denominator of the network-wide per second contribution fee. |
| penaltyNumerator         | uint256                  | The numerator of the penalty to pay to reject a bid.             |
| penaltyDenominator       | uint256                  | The denominator of the penalty to pay to reject a bid.           |
| bidPeriodLengthInSeconds | uint256                  | Bid period length in seconds                                     |
| reclaimAuctionLength     | uint256                  | when the required bid amount reaches its minimum value.          |
| minForSalePrice          | uint256                  |                                                                  |

#### getHost

```solidity
function getHost() external view returns (contract ISuperfluid)
```

Superfluid Host

#### setHost

```solidity
function setHost(contract ISuperfluid host) external
```

Set Superfluid Host

#### getPaymentToken

```solidity
function getPaymentToken() external view returns (contract ISuperToken)
```

Payment token

#### setPaymentToken

```solidity
function setPaymentToken(contract ISuperToken paymentToken) external
```

Set Payment Token

#### getBeneficiary

```solidity
function getBeneficiary() external view returns (contract ICFABeneficiary)
```

Beneficiary

#### setBeneficiary

```solidity
function setBeneficiary(contract ICFABeneficiary beneficiary) external
```

Set Beneficiary

#### getPerSecondFeeNumerator

```solidity
function getPerSecondFeeNumerator() external view returns (uint256)
```

The numerator of the network-wide per second contribution fee.

#### setPerSecondFeeNumerator

```solidity
function setPerSecondFeeNumerator(uint256 perSecondFeeNumerator) external
```

Set Per Second Fee Numerator

#### getPerSecondFeeDenominator

```solidity
function getPerSecondFeeDenominator() external view returns (uint256)
```

The denominator of the network-wide per second contribution fee.

#### setPerSecondFeeDenominator

```solidity
function setPerSecondFeeDenominator(uint256 perSecondFeeDenominator) external
```

Set Per Second Fee Denominator

#### getPenaltyNumerator

```solidity
function getPenaltyNumerator() external view returns (uint256)
```

The numerator of the penalty rate.

#### setPenaltyNumerator

```solidity
function setPenaltyNumerator(uint256 penaltyNumerator) external
```

Set Penalty Numerator

#### getPenaltyDenominator

```solidity
function getPenaltyDenominator() external view returns (uint256)
```

The denominator of the penalty rate.

#### setPenaltyDenominator

```solidity
function setPenaltyDenominator(uint256 penaltyDenominator) external
```

Set Penalty Denominator

#### getReclaimAuctionLength

```solidity
function getReclaimAuctionLength() external view returns (uint256)
```

the final/minimum required bid reached and maintained at the end of the auction.

#### setReclaimAuctionLength

```solidity
function setReclaimAuctionLength(uint256 reclaimAuctionLength) external
```

Set Reclaim Auction Length

#### getBidPeriodLengthInSeconds

```solidity
function getBidPeriodLengthInSeconds() external view returns (uint256)
```

Bid period length in seconds

#### setBidPeriodLengthInSeconds

```solidity
function setBidPeriodLengthInSeconds(uint256 bidPeriodLengthInSeconds) external
```

Set Bid Period Length in seconds

#### getMinForSalePrice

```solidity
function getMinForSalePrice() external view returns (uint256)
```

Minimum for sale price

#### setMinForSalePrice

```solidity
function setMinForSalePrice(uint256 minForSalePrice) external
```

Set minimum for sale price



### LibPCOLicenseParams

#### STORAGE\_POSITION

```solidity
bytes32 STORAGE_POSITION
```

#### DiamondStorage

```solidity
struct DiamondStorage {
  contract ICFABeneficiary beneficiary;
  contract ISuperToken paymentToken;
  contract ISuperfluid host;
  uint256 perSecondFeeNumerator;
  uint256 perSecondFeeDenominator;
  uint256 penaltyNumerator;
  uint256 penaltyDenominator;
  uint256 bidPeriodLengthInSeconds;
  uint256 reclaimAuctionLength;
  uint256 minForSalePrice;
}
```

#### diamondStorage

```solidity
function diamondStorage() internal pure returns (struct LibPCOLicenseParams.DiamondStorage ds)
```

### IPCOLicenseParamsStore

#### getHost

```solidity
function getHost() external view returns (contract ISuperfluid)
```

Superfluid Host

#### getPaymentToken

```solidity
function getPaymentToken() external view returns (contract ISuperToken)
```

Payment token

#### getBeneficiary

```solidity
function getBeneficiary() external view returns (contract ICFABeneficiary)
```

Beneficiary

#### getPerSecondFeeNumerator

```solidity
function getPerSecondFeeNumerator() external view returns (uint256)
```

The numerator of the network-wide per second contribution fee.

#### getPerSecondFeeDenominator

```solidity
function getPerSecondFeeDenominator() external view returns (uint256)
```

The denominator of the network-wide per second contribution fee.

#### getPenaltyNumerator

```solidity
function getPenaltyNumerator() external view returns (uint256)
```

The numerator of the penalty rate.

#### getPenaltyDenominator

```solidity
function getPenaltyDenominator() external view returns (uint256)
```

The denominator of the penalty rate.

#### getReclaimAuctionLength

```solidity
function getReclaimAuctionLength() external view returns (uint256)
```

when the required bid amount reaches its minimum value.

#### getBidPeriodLengthInSeconds

```solidity
function getBidPeriodLengthInSeconds() external view returns (uint256)
```

Bid period length in seconds

#### getMinForSalePrice

```solidity
function getMinForSalePrice() external view returns (uint256)
```

Minimum for sale price
