---
description: >-
  The schemas and definitions that define how content is anchored to Geo Web
  land parcels.
---

# Data Models

:::info
The repository for Geo Web data models can be found at [https://github.com/Geo-Web-Project/datamodels](https://github.com/Geo-Web-Project/datamodels).&#x20;
:::

The Geo Web Content Layer is built on top of the [Ceramic](https://ceramic.network/) protocol.

At the root of all content anchored to a parcel is a [StreamID](https://developers.ceramic.network/learn/glossary/#streamid). This ID is generated deterministically by combining the parcel licensor's DID and the parcel's ID. It is immutable even as content linked in the stream changes over time.&#x20;

When a new licensor assumes control of a parcel, a new deterministic StreamID will be generated. If a former licensor regains control of a parcel, their existing StreamID becomes the active stream again, and they can resume publishing operations from where they left off.

This deterministic structure also means that the StreamID need not even be stored in the Geo Web's [core contracts](core-contracts/). Based on the current licensor's address and the parcel ID, Cadastres and Spatial Browsers can always find the correct, active content stream.

<figure><img src="https://camo.githubusercontent.com/99ae79279d2b5b73ba610a913ee29c2990584322aab2322c4d2f02359fad0fd8/68747470733a2f2f646576656c6f706572732e636572616d69632e6e6574776f726b2f696d616765732f6964782d6172636869746563747572652e706e67" alt=""/><figcaption><p>From the <a href="https://developers.ceramic.network/tools/glaze/did-datastore/#design">Ceramic docs</a> </p></figcaption></figure>

Using this root StreamID and the core functionality of the Ceramic protocol, arbitrary content can be anchored to Geo Web parcels.

To coordinate content publishing and resolution of this arbitrary content, the following definitions and schemas are maintained in [a publically available repository](https://github.com/Geo-Web-Project/datamodels/tree/main/docs). All Geo Web developers and creators are invited to contribute to this list.

### Definitions

[Definitions](https://developers.ceramic.network/tools/glaze/did-datastore/#definitions) are streams that store the metadata for the keys at the index of a land parcel.

| Name                                                                                                       | Alias        | Description                                              | Source                                                     |
| ---------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------- | ---------------------------------------------------------- |
| [Basic Profile](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/definitions/BasicProfile.md)  | basicProfile | Contains a DID's basic profile information               | [@datamodels](https://github.com/ceramicstudio/datamodels) |
| [Geo Web Pinset](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/definitions/GeoWebPinset.md) | geoWebPinset | Pinset of IPFS objects anchored to a Geo Web land parcel | Custom                                                     |
| [Media Gallery](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/definitions/MediaGallery.md)  | mediaGallery | A gallery of media objects                               | Custom                                                     |

### Schemas

[Schemas](https://developers.ceramic.network/tools/glaze/did-datastore/#schemas) are [JSON schemas](https://json-schema.org/) of _records_ and other streams created in the Geo Web.

| Title                                                                                                | Description                                                            | Source                                                     |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------- |
| [BasicProfile](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/BasicProfile.md) | Contains a DID's basic profile information                             | [@datamodels](https://github.com/ceramicstudio/datamodels) |
| [Pinset](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/Pinset.md)             | A simple schema for storing a CID that represents the root of a pinset | Custom                                                     |
| [MediaGallery](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/MediaGallery.md) | A gallery of media objects                                             | Custom                                                     |
| [MediaObject](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/MediaObject.md)   | A media object, such as an image, video, audio, or 3D model            | Schema.org                                                 |
