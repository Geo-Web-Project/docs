# Developing Augments

An **Augment** is a package that can be installed onto a specific parcel in the [PCO World](./mud-world). This package is a template that defines a set of entities and components that should be installed together. Components and their properties may or may not be configurable by a user at the time of installation. This is determined by the developer of an Augment.

An Augment is defined as an onchain smart contract. This enables anyone to verify that an Augment has been installed according to the rules defined by the original Augment developer.

All Augments must conform to a simple onchain interface that enables them to be discovered and installed in a general way without any additional work needed by clients.

:::tip
You can think of Augments like apps, only with more open distribution and flexibility for developers to create any business model they wish.
:::

## Augment Interface

See [IAugment.sol](https://github.com/Geo-Web-Project/mud-world-base/blob/main/packages/contracts/src/modules/augmentinstallation/IAugment.sol).

```solidity
interface IAugment is IERC165 {
    /**
     * @notice Return the metadata of the augment.
     * @return metadataURI The URI of the metadata as a content hash
     */
    function getMetadataURI() external view returns (bytes memory metadataURI);

    /**
     * @notice Return the entity and component types for the augment.
     * @return The types of the augment as a bytes16[][] two dimensional array.
     */
    function getComponentTypes() external view returns (bytes16[][] memory);

    /**
     * @notice Perform overrides to entities that define this augment.
     * @dev This function should emit Store events to be read by clients.
     */
    function performOverrides(bytes14 namespace) external;
}
```

## Installing Augments

The [PCO World](./mud-world) has a custom system for installing Augments. The caller must have access to the namespace in order to install an Augment.

```solidity
contract AugmentInstallationSystem {
  function installAugment(IAugment augment, bytes14 namespace, bytes memory args) public
}
```

### User Configuration

Each Augment defines user-configurable components using the `getComponentTypes()` method. This returns a two-dimensional array representing a list of entities and the types of their components to be added to the world. Upon installation, a user provides ABI encoded values for these types.

For example, say an Augment wants to package together a `NameComponent` and `ModelComponent` as a single entity, with each being user-configurable. The developer would need to implement `getComponentTypes()` and return an array with a single element that contains an array with each component name as truncated `bytes16`.

```solidity
[
  [
    bytes16(bytes32("NameComponent")),
    bytes16(bytes32("ModelComponent"))
  ]
]
```

### Overrides

An Augment template can also define components or properties that cannot be configured by the user. This is done by implementing a hook that _overrides_ any changes before completing installation. These overrides are defined as a function `performOverrides(bytes14)` which is called by the `AugmentInstallationSystem`.

:::note
The Augment may need to be granted access to resources by the user before installation can succeed. This is recommended to be done by calling [AccessManagementSystem](https://github.com/latticexyz/mud/blob/main/packages/world/src/modules/core/implementations/AccessManagementSystem.sol) inside of a transaction bundle, granting and revoking access before and after calling `installAugment`.
:::

## Augment Registry

:::caution
There will be some sort of registry for clients and users to discover Augments, but that is not permissioned. Think [podcast](https://podcastindex.org) [indexing](https://podnews.net/article/who-indexes-what), not app stores.
:::

## Examples

:::caution
TODO
:::
