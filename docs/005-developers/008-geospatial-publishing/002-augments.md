# Developing Augments

An **Augment** is a MUD [module](https://mud.dev/world/modules) that can be installed onto a specific parcel in the [PCO World](./mud-world). A module is an onchain script that can pre-populate tables with content and install infrastructure like systems, hooks, or new tables. All Augments must conform to a simple onchain interface that enables them to be discovered and installed in a general way without any additional work needed by clients.

:::tip
You can think of Augments like Apps, only with more open distribution and flexibility for developers to create any business model they wish.
:::

## Augment Interface

:::caution
The interface of an Augment is still a work in progress, but will probably include:

- Name
- Icon/favicon
- Categories/inheritance model

:::

## Installing Augments

The [PCO World](./mud-world) will have a custom system installed to make it easier to install Augments. It is similar to `ModuleInstallationSystem`, but with the addition of an explicit `namespace` parameter. This allows Augment developers to design their Augment to be generic and installable to any namespace.

```solidity
contract ModuleInstallationSystem {
  function installModule(IModule module, bytes memory args) public
}
```

```solidity
contract AugmentInstallationSystem {
  function installAugment(IAugment augment, bytes14 namespace, bytes memory args) public
}
```

## Augment Registry

:::caution
There will be some sort of registry for clients and users to discover Augments, but that is not permissioned. Think [podcast](https://podcastindex.org) [indexing](https://podnews.net/article/who-indexes-what), not app stores.
:::

## Permissions

An Augment that is run onchain will have the same permissions to access the World as the caller of the module. This means the owner of a parcel can install an Augment that makes changes to resources in their parcel's namespace, but not other namespaces if it doesn't have permission.

## Examples

:::caution
TODO
:::
