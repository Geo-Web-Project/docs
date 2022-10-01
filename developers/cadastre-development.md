---
description: >-
  Documentation for the user interface for Geo Web land transactions and
  publishing.
---

# Cadastre Development

Interested developers are encouraged to build their own [Cadastre](../concepts/cadastre-intro.md) and innovate on publishing tools, use case enablement, user experience, and marketing. Cadastres are envisioned to be supported directly through [network funds](../concepts/network-funds.md) (e.g. earn a commission on all land claims made through the interface).

An SDK for Cadastres will eventually be developed, but currently is supported by the [Geo Web Subgraph](subgraph/) and [Data Models](data-models.md).

The first implementation of a Geo Web Cadastre can be found at [https://geoweb.land/](http://geoweb.land/).  It supports the Geo Web definitions and schemas accordingly:

### [BasicProfile](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/BasicProfile.md)

A **BasicProfile** contains a DID's basic profile information. This schema lives in [@datamodels](https://github.com/ceramicstudio/datamodels).

| Property | Support |
| -------- | ------- |
| `name`   | ✅       |
| `url`    | ✅       |

### [Pinset](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/Pinset.md)

Pinset of IPFS objects.

| Property | Support |
| -------- | ------- |
| `root`   | ✅       |

### [MediaGallery](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/MediaGallery.md)

An array of media object stream IDs.

| Operation | Support                  |
| --------- | ------------------------ |
| Edit      | ✅                        |
| View      | ⚠️ - Only owned parcels​ |

### [MediaObject](https://github.com/Geo-Web-Project/datamodels/blob/main/docs/schemas/MediaObject.md)

A media object, such as an image, video, audio, or 3D model. This schema comes from [Schema.org](https://schema.org/MediaObject).

| Property         | Support |
| ---------------- | ------- |
| `@type`          | ✅       |
| `name`           | ✅       |
| `contentUrl`     | ✅       |
| `contentSize`    | ❌       |
| `encodingFormat` | ✅       |
| `encoding`       | ❌       |

| Type          | Encoding             | Support      |
| ------------- | -------------------- | ------------ |
| `3DModel`     | `model/gltf-binary`  | ✅            |
| `3DModel`     | `model/vnd.usdz+zip` | ✅            |
| `ImageObject` | `image/gif`          | ✅            |
| `ImageObject` | `image/jpeg`         | ✅            |
| `ImageObject` | `image/png`          | ✅            |
| `ImageObject` | `image/svg+xml`      | ✅            |
| `AudioObject` | `audio/mpeg`         | ✅            |
| `AudioObject` | `audio/mp4`          | ✅            |
| `VideoObject` | `video/mpeg`         | ✅            |
| `VideoObject` | `video/mp4`          | <p>✅<br></p> |
