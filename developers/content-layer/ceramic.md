---
description: >-
  Ceramic is a decentralized, open source platform for creating, hosting, and
  sharing streams of data.
---

# Ceramic

On networks like [IPFS](ipfs.md), every piece of content gets a unique, deterministic cryptographic identifier through a concept known as [content addressing](https://docs.ipfs.io/concepts/content-addressing/). This is great because it enables trustless peer-to-peer content sharing, but creates overhead for content that needs to change over time—every content modification results in an entirely new **content identifier (CID)**.&#x20;

Ceramic is a protocol built on top of IPFS which makes it easy to create, manage, and share mutable [**Streams**](https://developers.ceramic.network/learn/advanced/overview/#streams) of content addressed data.&#x20;

The Geo Web uses Ceramic to manage mutable content linking for its digital land parcels. Ceramic allows the Geo Web to utilize IPFS's p2p content network, but greatly simplifies the user experience for publishers. It maintains trustlessness, but does not require expensive blockchain transactions for each update.

Upon an initial claim of a Geo Web land parcel, a root Ceramic [StreamID](https://developers.ceramic.network/learn/glossary/#streamid) is created deterministically based on a combination of the licensor's DID and the parcel ID. A StreamID is immutable (it doesn't change with changes to its content) and is exclusively controlled by the land parcel's claimant.&#x20;

Arbitrary digital content can be linked and resolved within a Stream using different [StreamTypes](https://developers.ceramic.network/#streamtypes), [schemas](https://developers.ceramic.network/tools/idx/overview/#schemas), and [records](https://developers.ceramic.network/tools/idx/overview/#records).&#x20;

The Cadastre currently manages Stream creation and modification automatically for publishers for a limited set of use cases. Currently, users can name their parcel and associate a URI via the [ParcelContentRoot schema](https://tiles.ceramic.community/document/k3y52l7qbv1frxig7l0udkrauoao40tel9cnfndqsjc4b4edec8ktchbn9r7lehhc) and add 3D and AR content via the [MediaGallery schema](https://tiles.ceramic.community/document/k3y52l7qbv1frxljeh1z6cypcapiazvn35g939py3ygp3m6lt3tfbk7cxqggj239c).&#x20;

![The ParcelContentRoot Ceramic schema seen on the Tiles explorer](<../../.gitbook/assets/ParcelContentRoot Schema.png>)

More content linking experiences (including point-specific anchoring) will be added over time and maintained [in a public list](https://github.com/Geo-Web-Project/datamodels). The community will always be empowered to [create and share their own schemas](../data-models.md) as well. Proper coordination with browsers (i.e., a browser must know how to interpret the content) is the only limit to content linking on the Geo Web with Ceramic.

\---

Check out the [developer docs](https://developers.ceramic.network/learn/welcome/) for additional details about Ceramic.
