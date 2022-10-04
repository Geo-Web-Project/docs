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

#### initializeParams

```
function initializeParams(contract ICFABeneficiary beneficiary, contract ISuperToken paymentToken, contract ISuperfluid host, uint256 perSecondFeeNumerator, uint256 perSecondFeeDenominator, uint256 penaltyNumerator, uint256 penaltyDenominator, uint256 bidPeriodLengthInSeconds, uint256 reclaimAuctionLength) external
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

#### getHost

```
function getHost() external view returns (contract ISuperfluid)
```

Superfluid Host

#### setHost

```
function setHost(contract ISuperfluid host) external
```

Set Superfluid Host

#### getPaymentToken

```
function getPaymentToken() external view returns (contract ISuperToken)
```

Payment token

#### setPaymentToken

```
function setPaymentToken(contract ISuperToken paymentToken) external
```

Set Payment Token

#### getBeneficiary

```
function getBeneficiary() external view returns (contract ICFABeneficiary)
```

Beneficiary

#### setBeneficiary

```
function setBeneficiary(contract ICFABeneficiary beneficiary) external
```

Set Beneficiary

#### getPerSecondFeeNumerator

```
function getPerSecondFeeNumerator() external view returns (uint256)
```

The numerator of the network-wide per second contribution fee.

#### setPerSecondFeeNumerator

```
function setPerSecondFeeNumerator(uint256 perSecondFeeNumerator) external
```

Set Per Second Fee Numerator

#### getPerSecondFeeDenominator

```
function getPerSecondFeeDenominator() external view returns (uint256)
```

The denominator of the network-wide per second contribution fee.

#### setPerSecondFeeDenominator

```
function setPerSecondFeeDenominator(uint256 perSecondFeeDenominator) external
```

Set Per Second Fee Denominator

#### getPenaltyNumerator

```
function getPenaltyNumerator() external view returns (uint256)
```

The numerator of the penalty rate.

#### setPenaltyNumerator

```
function setPenaltyNumerator(uint256 penaltyNumerator) external
```

Set Penalty Numerator

#### getPenaltyDenominator

```
function getPenaltyDenominator() external view returns (uint256)
```

The denominator of the penalty rate.

#### setPenaltyDenominator

```
function setPenaltyDenominator(uint256 penaltyDenominator) external
```

Set Penalty Denominator

#### getReclaimAuctionLength

```
function getReclaimAuctionLength() external view returns (uint256)
```

the final/minimum required bid reached and maintained at the end of the auction.

#### setReclaimAuctionLength

```
function setReclaimAuctionLength(uint256 reclaimAuctionLength) external
```

Set Reclaim Auction Length

#### getBidPeriodLengthInSeconds

```
function getBidPeriodLengthInSeconds() external view returns (uint256)
```

Bid period length in seconds

#### setBidPeriodLengthInSeconds

```
function setBidPeriodLengthInSeconds(uint256 bidPeriodLengthInSeconds) external
```

Set Bid Period Length in seconds

### LibPCOLicenseParams

#### STORAGE\_POSITION

```
bytes32 STORAGE_POSITION
```

#### DiamondStorage

```
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
}
```

#### diamondStorage

```
function diamondStorage() internal pure returns (struct LibPCOLicenseParams.DiamondStorage ds)
```

### IPCOLicenseParamsStore

#### getHost

```
function getHost() external view returns (contract ISuperfluid)
```

Superfluid Host

#### getPaymentToken

```
function getPaymentToken() external view returns (contract ISuperToken)
```

Payment token

#### getBeneficiary

```
function getBeneficiary() external view returns (contract ICFABeneficiary)
```

Beneficiary

#### getPerSecondFeeNumerator

```
function getPerSecondFeeNumerator() external view returns (uint256)
```

The numerator of the network-wide per second contribution fee.

#### getPerSecondFeeDenominator

```
function getPerSecondFeeDenominator() external view returns (uint256)
```

The denominator of the network-wide per second contribution fee.

#### getPenaltyNumerator

```
function getPenaltyNumerator() external view returns (uint256)
```

The numerator of the penalty rate.

#### getPenaltyDenominator

```
function getPenaltyDenominator() external view returns (uint256)
```

The denominator of the penalty rate.

#### getReclaimAuctionLength

```
function getReclaimAuctionLength() external view returns (uint256)
```

when the required bid amount reaches its minimum value.

#### getBidPeriodLengthInSeconds

```
function getBidPeriodLengthInSeconds() external view returns (uint256)
```

Bid period length in seconds
