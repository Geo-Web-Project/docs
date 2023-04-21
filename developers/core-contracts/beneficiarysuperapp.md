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

[`ICFABeneficiary.sol=`](https://github.com/Geo-Web-Project/core-contracts/tree/main/contracts/beneficiary/interfaces)

## Contract Functions

### BeneficiarySuperApp

#### cfaV1

```solidity
struct CFAv1Library.InitData cfaV1
```

#### paramsStore

```solidity
contract IPCOLicenseParamsStore paramsStore
```

#### lastDeletion

```solidity
mapping(address => uint256) lastDeletion
```

Timestamp of last deletion from each beacon proxy

#### beneficiary

```solidity
address beneficiary
```

Beneficiary of funds.

#### initialize

```solidity
function initialize(contract IPCOLicenseParamsStore paramsStore_, address beneficiary_) external
```

#### getParamsStore

```solidity
function getParamsStore() external view returns (contract IPCOLicenseParamsStore)
```

Params Store

#### setParamsStore

```solidity
function setParamsStore(contract IPCOLicenseParamsStore paramsStore_) external
```

Set Params Store

#### getBeneficiary

```solidity
function getBeneficiary() external view returns (address)
```

Beneficiary

#### setBeneficiary

```solidity
function setBeneficiary(address beneficiary_) external
```

Set Beneficiary

#### getLastDeletion

```solidity
function getLastDeletion(address sender) external view returns (uint256)
```

Get last deletion for sender

#### \_setLastDeletion

```solidity
function _setLastDeletion(address beaconProxy) internal
```

Set last deletion of beacon proxy to now

**Parameters**

| Name        | Type    | Description  |
| ----------- | ------- | ------------ |
| beaconProxy | address | Beacon proxy |

#### afterAgreementTerminated

```solidity
function afterAgreementTerminated(contract ISuperToken superToken, address agreementClass, bytes32, bytes agreementData, bytes, bytes ctx) external returns (bytes newCtx)
```

#### \_isSameToken

```solidity
function _isSameToken(contract ISuperToken superToken) private view returns (bool)
```

#### \_isCFAv1

```solidity
function _isCFAv1(address agreementClass) private view returns (bool)
```

#### onlyHost

```solidity
modifier onlyHost()
```

### ICFABeneficiary

#### getLastDeletion

```solidity
function getLastDeletion(address sender) external view returns (uint256)
```

Get last deletion for sender

