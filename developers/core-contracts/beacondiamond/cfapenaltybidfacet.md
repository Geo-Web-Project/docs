---
description: Documentation for the CFAPenaltyBidFacet contract.
---

# CFAPenaltyBidFacet

## Summary

The `CFAPenaltyBidFacet` implements the functions that define the Geo Web's auction system.&#x20;

The Geo Web introduces an "owner-forgiving" auction mechanism instead of a "pure" partial commmon ownership/Harberger tax system that would implement instantaneous transfers of assets upon an incoming (higher) bid.&#x20;

`CFAPenaltyBidFacet` gives the current licensor an exclusive window to reject or accept a rival bid. To reject a bid, the licensor must pay a percentage of the incoming bid value as a penalty. Accepting a bid transfers the parcel to the bidder, returns the appropriate collateral to the bidder, and transfers the sale proceeds (plus or minus applicable network fees) to the now former parcel licensor.

## Code

[`CFAPenaltyBidFacet.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/facets/CFAPenaltyBidFacet.sol)

[`LibCFAPenaltyBid.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/pco-license/libraries/LibCFAPenaltyBid.sol)

## Contract Functions

### CFAPenaltyBidFacet

Handles bidding using CFAs and penalities

#### BidAccepted

```
event BidAccepted(address _payer, address _bidder, uint256 forSalePrice)
```

Emitted when a bid is accepted

#### BidRejected

```
event BidRejected(address _payer, address _bidder, uint256 forSalePrice)
```

Emitted when a bid is rejected

#### TransferTriggered

```
event TransferTriggered(address _sender, address _payer, address _bidder, uint256 forSalePrice)
```

Emitted when a transfer is triggered

#### onlyIfPendingBid

```
modifier onlyIfPendingBid()
```

#### onlyIfNotPendingBid

```
modifier onlyIfNotPendingBid()
```

#### onlyAfterBidPeriod

```
modifier onlyAfterBidPeriod()
```

#### onlyDuringBidPeriod

```
modifier onlyDuringBidPeriod()
```

#### shouldBidPeriodEndEarly

```
function shouldBidPeriodEndEarly() public view returns (bool)
```

Should bid period end early

#### pendingBid

```
function pendingBid() external pure returns (struct LibCFAPenaltyBid.Bid)
```

Get pending bid

#### hasPendingBid

```
function hasPendingBid() external view returns (bool)
```

Checks if there is a pending bid

#### calculatePenalty

```
function calculatePenalty() external view returns (uint256)
```

Get penalty payment

#### editBid

```
function editBid(int96 newContributionRate, uint256 newForSalePrice) external
```

Edit bid - Must be the current payer - Must have permissions to update flow for payer

**Parameters**

| Name                | Type    | Description                                                                        |
| ------------------- | ------- | ---------------------------------------------------------------------------------- |
| newContributionRate | int96   | New contribution rate for bid                                                      |
| newForSalePrice     | uint256 | Intented new for sale price. Must be within rounding bounds of newContributionRate |

#### placeBid

```
function placeBid(int96 newContributionRate, uint256 newForSalePrice) external
```

Place a bid to purchase license as msg.sender - Pending bid must not exist - Must have permissions to create flow for bidder - Must have ERC-20 approval of payment token

**Parameters**

| Name                | Type    | Description                                                                        |
| ------------------- | ------- | ---------------------------------------------------------------------------------- |
| newContributionRate | int96   | New contribution rate for bid                                                      |
| newForSalePrice     | uint256 | Intented new for sale price. Must be within rounding bounds of newContributionRate |

#### acceptBid

```
function acceptBid() external
```

Accept a pending bid as the current payer - Must be payer - Pending bid must exist - Must be within bidding period

#### rejectBid

```
function rejectBid(int96 newContributionRate, uint256 newForSalePrice) external
```

Reject a pending bid as the current payer - Must be payer - Pending bid must exist - Must be within bidding period - Must approve penalty amount

**Parameters**

| Name                | Type    | Description                                                                        |
| ------------------- | ------- | ---------------------------------------------------------------------------------- |
| newContributionRate | int96   | New contribution rate for bid                                                      |
| newForSalePrice     | uint256 | Intented new for sale price. Must be within rounding bounds of newContributionRate |

#### triggerTransfer

```
function triggerTransfer() external
```

Trigger a transfer after bidding period has elapsed - Pending bid must exist - Must be after bidding period

### LibCFAPenaltyBid

#### STORAGE\_POSITION\_OUT\_BID

```
bytes32 STORAGE_POSITION_OUT_BID
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

#### pendingBid

```
function pendingBid() internal pure returns (struct LibCFAPenaltyBid.Bid ds)
```

#### FlowChangeType

```
enum FlowChangeType {
  CREATE_FLOW,
  UPDATE_FLOW,
  DELETE_FLOW
}
```

#### \_getBooleanFlowOperatorPermissions

```
function _getBooleanFlowOperatorPermissions(uint8 permissions, enum LibCFAPenaltyBid.FlowChangeType flowChangeType) internal pure returns (bool flowchangeTypeAllowed)
```

#### \_calculatePenalty

```
function _calculatePenalty() internal view returns (uint256)
```

Calculate the penalty needed for the pending bid to be rejected

#### \_clearPendingBid

```
function _clearPendingBid() internal
```

#### \_triggerTransfer

```
function _triggerTransfer() internal
```

Trigger transfer of license

#### \_rejectBid

```
function _rejectBid(int96 newContributionRate, uint256 newForSalePrice) internal
```

Reject Bid
