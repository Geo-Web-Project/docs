# LibGeoWebCoordinate

### Summary

The Geo Web Coordinate library defines the Geo Web's fixed global grid and coordinate system. It is the basis for the spatial definition of all [Geo Web land parcels](../../../../concepts/digital-land.md).

The system's grid lines create rectangular areas referred to as Geo Web Coordinates. Each Geo Web land parcel is an array of Geo Web Coordinates.

![A single Geo Web Coordinate (yellow rectangle) on the Kovan testnet](<../../../../.gitbook/assets/Geo Web Coordinate.png>)

In the testnet implementation, a larger grid size was used for more practical large land claims. Mainnet will use a grid size that balances transaction fees/size with enabling faithful representation of existing real world property lines.

The [GeoWebParcelFacet](./) uses the library defined in Geo Web Coordinate to traverse parcel paths and map coordinates to the word index.

### Code

[`LibGeoWebCoordinate.sol`](https://github.com/Geo-Web-Project/core-contracts/blob/main/contracts/registry/libraries/LibGeoWebCoordinate.sol)

## Reference Documentation

### GeoWebCoordinate

GeoWebCoordinate is an unsigned 64-bit integer that contains x and y coordinates in the upper and lower 32 bits, respectively.

### Grid Size

```
uint64 constant MAX_X = ((2**23) - 1);
uint64 constant MAX_Y = ((2**22) - 1);
```

Sets the fixed number of latitudinal and longitudinal gridlines.

### traverse

```
    function traverse(
        uint64 origin,
        uint256 direction,
        uint256 iX,
        uint256 iY,
        uint256 i
    )
        public
        pure
        returns (
            uint64 destination,
            uint256 i_x,
            uint256 i_y,
            uint256 i
        );
```

Returns the destination coordinate traversed in single direction from the origin coordinate.

### toWordIndex

```
    function toWordIndex(uint64 coord)
        public
        pure
        returns (
            uint256 i_x,
            uint256 i_y,
            uint256 i
        );
```

Returns a word index converted from a coordinate.

### GeoWebCoordinatePath

GeoWebCoordinatePath stores a path of directions in a uint256. The most significant 8 bits encodes the length of the path.

```
    uint256 constant INNER_PATH_MASK = (2**(256 - 8)) - 1;
    uint256 constant PATH_SEGMENT_MASK = (2**2) - 1;
```

### nextDirection

```
    function nextDirection(uint256 path)
        public
        pure
        returns (
            bool hasNext,
            uint256 direction,
            uint256 nextPath
        );
```

Returns the next direction (if it exists) from a path.
